# `springCloudGateway` Submodule <a name="`springCloudGateway` Submodule" id="@cdktf/provider-azurerm.springCloudGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGateway <a name="SpringCloudGateway" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway azurerm_spring_cloud_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGateway(Construct Scope, string Id, SpringCloudGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig">SpringCloudGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig">SpringCloudGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata">PutApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization">PutClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance">PutLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute">PutLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso">PutSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata">ResetApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringIds">ResetApplicationPerformanceMonitoringIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes">ResetApplicationPerformanceMonitoringTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization">ResetClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerInstance">ResetLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerRoute">ResetLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables">ResetSensitiveEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso">ResetSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiMetadata` <a name="PutApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata"></a>

```csharp
private void PutApiMetadata(SpringCloudGatewayApiMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `PutClientAuthorization` <a name="PutClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization"></a>

```csharp
private void PutClientAuthorization(SpringCloudGatewayClientAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors"></a>

```csharp
private void PutCors(SpringCloudGatewayCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `PutLocalResponseCachePerInstance` <a name="PutLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance"></a>

```csharp
private void PutLocalResponseCachePerInstance(SpringCloudGatewayLocalResponseCachePerInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---

##### `PutLocalResponseCachePerRoute` <a name="PutLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute"></a>

```csharp
private void PutLocalResponseCachePerRoute(SpringCloudGatewayLocalResponseCachePerRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota"></a>

```csharp
private void PutQuota(SpringCloudGatewayQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `PutSso` <a name="PutSso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso"></a>

```csharp
private void PutSso(SpringCloudGatewaySso Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---

##### `ResetApiMetadata` <a name="ResetApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata"></a>

```csharp
private void ResetApiMetadata()
```

##### `ResetApplicationPerformanceMonitoringIds` <a name="ResetApplicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringIds"></a>

```csharp
private void ResetApplicationPerformanceMonitoringIds()
```

##### `ResetApplicationPerformanceMonitoringTypes` <a name="ResetApplicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes"></a>

```csharp
private void ResetApplicationPerformanceMonitoringTypes()
```

##### `ResetClientAuthorization` <a name="ResetClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization"></a>

```csharp
private void ResetClientAuthorization()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly"></a>

```csharp
private void ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLocalResponseCachePerInstance` <a name="ResetLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerInstance"></a>

```csharp
private void ResetLocalResponseCachePerInstance()
```

##### `ResetLocalResponseCachePerRoute` <a name="ResetLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerRoute"></a>

```csharp
private void ResetLocalResponseCachePerRoute()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetSensitiveEnvironmentVariables` <a name="ResetSensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables"></a>

```csharp
private void ResetSensitiveEnvironmentVariables()
```

##### `ResetSso` <a name="ResetSso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso"></a>

```csharp
private void ResetSso()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata">ApiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization">ClientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstance">LocalResponseCachePerInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference">SpringCloudGatewayLocalResponseCachePerInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRoute">LocalResponseCachePerRoute</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference">SpringCloudGatewayLocalResponseCachePerRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso">Sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput">ApiMetadataInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIdsInput">ApplicationPerformanceMonitoringIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput">ApplicationPerformanceMonitoringTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput">ClientAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstanceInput">LocalResponseCachePerInstanceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRouteInput">LocalResponseCachePerRouteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput">SensitiveEnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput">SsoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIds">ApplicationPerformanceMonitoringIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes">ApplicationPerformanceMonitoringTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables">SensitiveEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiMetadata`<sup>Required</sup> <a name="ApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata"></a>

```csharp
public SpringCloudGatewayApiMetadataOutputReference ApiMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a>

---

##### `ClientAuthorization`<sup>Required</sup> <a name="ClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization"></a>

```csharp
public SpringCloudGatewayClientAuthorizationOutputReference ClientAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors"></a>

```csharp
public SpringCloudGatewayCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a>

---

##### `LocalResponseCachePerInstance`<sup>Required</sup> <a name="LocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstance"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerInstanceOutputReference LocalResponseCachePerInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference">SpringCloudGatewayLocalResponseCachePerInstanceOutputReference</a>

---

##### `LocalResponseCachePerRoute`<sup>Required</sup> <a name="LocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRoute"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerRouteOutputReference LocalResponseCachePerRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference">SpringCloudGatewayLocalResponseCachePerRouteOutputReference</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota"></a>

```csharp
public SpringCloudGatewayQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a>

---

##### `Sso`<sup>Required</sup> <a name="Sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso"></a>

```csharp
public SpringCloudGatewaySsoOutputReference Sso { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts"></a>

```csharp
public SpringCloudGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ApiMetadataInput`<sup>Optional</sup> <a name="ApiMetadataInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput"></a>

```csharp
public SpringCloudGatewayApiMetadata ApiMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `ApplicationPerformanceMonitoringIdsInput`<sup>Optional</sup> <a name="ApplicationPerformanceMonitoringIdsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIdsInput"></a>

```csharp
public string[] ApplicationPerformanceMonitoringIdsInput { get; }
```

- *Type:* string[]

---

##### `ApplicationPerformanceMonitoringTypesInput`<sup>Optional</sup> <a name="ApplicationPerformanceMonitoringTypesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput"></a>

```csharp
public string[] ApplicationPerformanceMonitoringTypesInput { get; }
```

- *Type:* string[]

---

##### `ClientAuthorizationInput`<sup>Optional</sup> <a name="ClientAuthorizationInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput"></a>

```csharp
public SpringCloudGatewayClientAuthorization ClientAuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput"></a>

```csharp
public SpringCloudGatewayCors CorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput"></a>

```csharp
public object HttpsOnlyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LocalResponseCachePerInstanceInput`<sup>Optional</sup> <a name="LocalResponseCachePerInstanceInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstanceInput"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerInstance LocalResponseCachePerInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---

##### `LocalResponseCachePerRouteInput`<sup>Optional</sup> <a name="LocalResponseCachePerRouteInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRouteInput"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerRoute LocalResponseCachePerRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput"></a>

```csharp
public SpringCloudGatewayQuota QuotaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `SensitiveEnvironmentVariablesInput`<sup>Optional</sup> <a name="SensitiveEnvironmentVariablesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveEnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `SsoInput`<sup>Optional</sup> <a name="SsoInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput"></a>

```csharp
public SpringCloudGatewaySso SsoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationPerformanceMonitoringIds`<sup>Required</sup> <a name="ApplicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIds"></a>

```csharp
public string[] ApplicationPerformanceMonitoringIds { get; }
```

- *Type:* string[]

---

##### `ApplicationPerformanceMonitoringTypes`<sup>Required</sup> <a name="ApplicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes"></a>

```csharp
public string[] ApplicationPerformanceMonitoringTypes { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `SensitiveEnvironmentVariables`<sup>Required</sup> <a name="SensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveEnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayApiMetadata <a name="SpringCloudGatewayApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayApiMetadata {
    string Description = null,
    string DocumentationUrl = null,
    string ServerUrl = null,
    string Title = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl">DocumentationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl">ServerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}.

---

##### `DocumentationUrl`<sup>Optional</sup> <a name="DocumentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl"></a>

```csharp
public string DocumentationUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}.

---

##### `ServerUrl`<sup>Optional</sup> <a name="ServerUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl"></a>

```csharp
public string ServerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}.

---

### SpringCloudGatewayClientAuthorization <a name="SpringCloudGatewayClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayClientAuthorization {
    string[] CertificateIds = null,
    object VerificationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds">CertificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled">VerificationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}. |

---

##### `CertificateIds`<sup>Optional</sup> <a name="CertificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds"></a>

```csharp
public string[] CertificateIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}.

---

##### `VerificationEnabled`<sup>Optional</sup> <a name="VerificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled"></a>

```csharp
public object VerificationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}.

---

### SpringCloudGatewayConfig <a name="SpringCloudGatewayConfig" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudServiceId,
    SpringCloudGatewayApiMetadata ApiMetadata = null,
    string[] ApplicationPerformanceMonitoringIds = null,
    string[] ApplicationPerformanceMonitoringTypes = null,
    SpringCloudGatewayClientAuthorization ClientAuthorization = null,
    SpringCloudGatewayCors Cors = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    object HttpsOnly = null,
    string Id = null,
    double InstanceCount = null,
    SpringCloudGatewayLocalResponseCachePerInstance LocalResponseCachePerInstance = null,
    SpringCloudGatewayLocalResponseCachePerRoute LocalResponseCachePerRoute = null,
    object PublicNetworkAccessEnabled = null,
    SpringCloudGatewayQuota Quota = null,
    System.Collections.Generic.IDictionary<string, string> SensitiveEnvironmentVariables = null,
    SpringCloudGatewaySso Sso = null,
    SpringCloudGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata">ApiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | api_metadata block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringIds">ApplicationPerformanceMonitoringIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes">ApplicationPerformanceMonitoringTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization">ClientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | client_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerInstance">LocalResponseCachePerInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | local_response_cache_per_instance block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerRoute">LocalResponseCachePerRoute</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | local_response_cache_per_route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables">SensitiveEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso">Sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}.

---

##### `ApiMetadata`<sup>Optional</sup> <a name="ApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata"></a>

```csharp
public SpringCloudGatewayApiMetadata ApiMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

api_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}

---

##### `ApplicationPerformanceMonitoringIds`<sup>Optional</sup> <a name="ApplicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringIds"></a>

```csharp
public string[] ApplicationPerformanceMonitoringIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}.

---

##### `ApplicationPerformanceMonitoringTypes`<sup>Optional</sup> <a name="ApplicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes"></a>

```csharp
public string[] ApplicationPerformanceMonitoringTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}.

---

##### `ClientAuthorization`<sup>Optional</sup> <a name="ClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization"></a>

```csharp
public SpringCloudGatewayClientAuthorization ClientAuthorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

client_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors"></a>

```csharp
public SpringCloudGatewayCors Cors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}.

---

##### `LocalResponseCachePerInstance`<sup>Optional</sup> <a name="LocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerInstance"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerInstance LocalResponseCachePerInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

local_response_cache_per_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#local_response_cache_per_instance SpringCloudGateway#local_response_cache_per_instance}

---

##### `LocalResponseCachePerRoute`<sup>Optional</sup> <a name="LocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerRoute"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerRoute LocalResponseCachePerRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

local_response_cache_per_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#local_response_cache_per_route SpringCloudGateway#local_response_cache_per_route}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota"></a>

```csharp
public SpringCloudGatewayQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}

---

##### `SensitiveEnvironmentVariables`<sup>Optional</sup> <a name="SensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveEnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}.

---

##### `Sso`<sup>Optional</sup> <a name="Sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso"></a>

```csharp
public SpringCloudGatewaySso Sso { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts"></a>

```csharp
public SpringCloudGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}

---

### SpringCloudGatewayCors <a name="SpringCloudGatewayCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayCors {
    string[] AllowedHeaders = null,
    string[] AllowedMethods = null,
    string[] AllowedOriginPatterns = null,
    string[] AllowedOrigins = null,
    object CredentialsAllowed = null,
    string[] ExposedHeaders = null,
    double MaxAgeSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOriginPatterns">AllowedOriginPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed">CredentialsAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}. |

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}.

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}.

---

##### `AllowedOriginPatterns`<sup>Optional</sup> <a name="AllowedOriginPatterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOriginPatterns"></a>

```csharp
public string[] AllowedOriginPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}.

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}.

---

##### `CredentialsAllowed`<sup>Optional</sup> <a name="CredentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed"></a>

```csharp
public object CredentialsAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}.

---

##### `ExposedHeaders`<sup>Optional</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}.

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}.

---

### SpringCloudGatewayLocalResponseCachePerInstance <a name="SpringCloudGatewayLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayLocalResponseCachePerInstance {
    string Size = null,
    string TimeToLive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.timeToLive">TimeToLive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}. |

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

##### `TimeToLive`<sup>Optional</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.timeToLive"></a>

```csharp
public string TimeToLive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

### SpringCloudGatewayLocalResponseCachePerRoute <a name="SpringCloudGatewayLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayLocalResponseCachePerRoute {
    string Size = null,
    string TimeToLive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.timeToLive">TimeToLive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}. |

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

##### `TimeToLive`<sup>Optional</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.timeToLive"></a>

```csharp
public string TimeToLive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

### SpringCloudGatewayQuota <a name="SpringCloudGatewayQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayQuota {
    string Cpu = null,
    string Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}.

---

### SpringCloudGatewaySso <a name="SpringCloudGatewaySso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewaySso {
    string ClientId = null,
    string ClientSecret = null,
    string IssuerUri = null,
    string[] Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri">IssuerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope">Scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}.

---

##### `IssuerUri`<sup>Optional</sup> <a name="IssuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}.

---

### SpringCloudGatewayTimeouts <a name="SpringCloudGatewayTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayApiMetadataOutputReference <a name="SpringCloudGatewayApiMetadataOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayApiMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl">ResetDocumentationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl">ResetServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentationUrl` <a name="ResetDocumentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl"></a>

```csharp
private void ResetDocumentationUrl()
```

##### `ResetServerUrl` <a name="ResetServerUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl"></a>

```csharp
private void ResetServerUrl()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput">DocumentationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput">ServerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl">DocumentationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl">ServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentationUrlInput`<sup>Optional</sup> <a name="DocumentationUrlInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput"></a>

```csharp
public string DocumentationUrlInput { get; }
```

- *Type:* string

---

##### `ServerUrlInput`<sup>Optional</sup> <a name="ServerUrlInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput"></a>

```csharp
public string ServerUrlInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentationUrl`<sup>Required</sup> <a name="DocumentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl"></a>

```csharp
public string DocumentationUrl { get; }
```

- *Type:* string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl"></a>

```csharp
public string ServerUrl { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewayApiMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---


### SpringCloudGatewayClientAuthorizationOutputReference <a name="SpringCloudGatewayClientAuthorizationOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayClientAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds">ResetCertificateIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled">ResetVerificationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIds` <a name="ResetCertificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds"></a>

```csharp
private void ResetCertificateIds()
```

##### `ResetVerificationEnabled` <a name="ResetVerificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled"></a>

```csharp
private void ResetVerificationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput">CertificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput">VerificationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds">CertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled">VerificationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateIdsInput`<sup>Optional</sup> <a name="CertificateIdsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput"></a>

```csharp
public string[] CertificateIdsInput { get; }
```

- *Type:* string[]

---

##### `VerificationEnabledInput`<sup>Optional</sup> <a name="VerificationEnabledInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput"></a>

```csharp
public object VerificationEnabledInput { get; }
```

- *Type:* object

---

##### `CertificateIds`<sup>Required</sup> <a name="CertificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds"></a>

```csharp
public string[] CertificateIds { get; }
```

- *Type:* string[]

---

##### `VerificationEnabled`<sup>Required</sup> <a name="VerificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled"></a>

```csharp
public object VerificationEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewayClientAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---


### SpringCloudGatewayCorsOutputReference <a name="SpringCloudGatewayCorsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOriginPatterns">ResetAllowedOriginPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed">ResetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders">ResetExposedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders"></a>

```csharp
private void ResetAllowedHeaders()
```

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods"></a>

```csharp
private void ResetAllowedMethods()
```

##### `ResetAllowedOriginPatterns` <a name="ResetAllowedOriginPatterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOriginPatterns"></a>

```csharp
private void ResetAllowedOriginPatterns()
```

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins"></a>

```csharp
private void ResetAllowedOrigins()
```

##### `ResetCredentialsAllowed` <a name="ResetCredentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed"></a>

```csharp
private void ResetCredentialsAllowed()
```

##### `ResetExposedHeaders` <a name="ResetExposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders"></a>

```csharp
private void ResetExposedHeaders()
```

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds"></a>

```csharp
private void ResetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatternsInput">AllowedOriginPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput">CredentialsAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatterns">AllowedOriginPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed">CredentialsAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginPatternsInput`<sup>Optional</sup> <a name="AllowedOriginPatternsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatternsInput"></a>

```csharp
public string[] AllowedOriginPatternsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `CredentialsAllowedInput`<sup>Optional</sup> <a name="CredentialsAllowedInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput"></a>

```csharp
public object CredentialsAllowedInput { get; }
```

- *Type:* object

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput"></a>

```csharp
public double MaxAgeSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOriginPatterns`<sup>Required</sup> <a name="AllowedOriginPatterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatterns"></a>

```csharp
public string[] AllowedOriginPatterns { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `CredentialsAllowed`<sup>Required</sup> <a name="CredentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed"></a>

```csharp
public object CredentialsAllowed { get; }
```

- *Type:* object

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewayCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---


### SpringCloudGatewayLocalResponseCachePerInstanceOutputReference <a name="SpringCloudGatewayLocalResponseCachePerInstanceOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayLocalResponseCachePerInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetTimeToLive">ResetTimeToLive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTimeToLive` <a name="ResetTimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetTimeToLive"></a>

```csharp
private void ResetTimeToLive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLiveInput">TimeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLive">TimeToLive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `TimeToLiveInput`<sup>Optional</sup> <a name="TimeToLiveInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLiveInput"></a>

```csharp
public string TimeToLiveInput { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `TimeToLive`<sup>Required</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLive"></a>

```csharp
public string TimeToLive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---


### SpringCloudGatewayLocalResponseCachePerRouteOutputReference <a name="SpringCloudGatewayLocalResponseCachePerRouteOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayLocalResponseCachePerRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetTimeToLive">ResetTimeToLive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTimeToLive` <a name="ResetTimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetTimeToLive"></a>

```csharp
private void ResetTimeToLive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLiveInput">TimeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLive">TimeToLive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `TimeToLiveInput`<sup>Optional</sup> <a name="TimeToLiveInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLiveInput"></a>

```csharp
public string TimeToLiveInput { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `TimeToLive`<sup>Required</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLive"></a>

```csharp
public string TimeToLive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewayLocalResponseCachePerRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---


### SpringCloudGatewayQuotaOutputReference <a name="SpringCloudGatewayQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewayQuota InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---


### SpringCloudGatewaySsoOutputReference <a name="SpringCloudGatewaySsoOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewaySsoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri">ResetIssuerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetIssuerUri` <a name="ResetIssuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri"></a>

```csharp
private void ResetIssuerUri()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue"></a>

```csharp
public SpringCloudGatewaySso InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---


### SpringCloudGatewayTimeoutsOutputReference <a name="SpringCloudGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



