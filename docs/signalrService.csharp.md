# `signalrService` Submodule <a name="`signalrService` Submodule" id="@cdktf/provider-azurerm.signalrService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrService <a name="SignalrService" id="@cdktf/provider-azurerm.signalrService.SignalrService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service azurerm_signalr_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrService(Construct Scope, string Id, SignalrServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig">SignalrServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig">SignalrServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace">PutLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint">PutUpstreamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled">ResetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled">ResetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled">ResetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace">ResetLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled">ResetLiveTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled">ResetMessagingLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds">ResetServerlessConnectionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode">ResetServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled">ResetTlsClientCertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint">ResetUpstreamEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.signalrService.SignalrService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.signalrService.SignalrService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.signalrService.SignalrService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.signalrService.SignalrService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.signalrService.SignalrService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors"></a>

```csharp
private void PutCors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity"></a>

```csharp
private void PutIdentity(SignalrServiceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `PutLiveTrace` <a name="PutLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace"></a>

```csharp
private void PutLiveTrace(SignalrServiceLiveTrace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku"></a>

```csharp
private void PutSku(SignalrServiceSku Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts"></a>

```csharp
private void PutTimeouts(SignalrServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

---

##### `PutUpstreamEndpoint` <a name="PutUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint"></a>

```csharp
private void PutUpstreamEndpoint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint.parameter.value"></a>

- *Type:* object

---

##### `ResetAadAuthEnabled` <a name="ResetAadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled"></a>

```csharp
private void ResetAadAuthEnabled()
```

##### `ResetConnectivityLogsEnabled` <a name="ResetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled"></a>

```csharp
private void ResetConnectivityLogsEnabled()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetHttpRequestLogsEnabled` <a name="ResetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled"></a>

```csharp
private void ResetHttpRequestLogsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLiveTrace` <a name="ResetLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace"></a>

```csharp
private void ResetLiveTrace()
```

##### `ResetLiveTraceEnabled` <a name="ResetLiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled"></a>

```csharp
private void ResetLiveTraceEnabled()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetMessagingLogsEnabled` <a name="ResetMessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled"></a>

```csharp
private void ResetMessagingLogsEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetServerlessConnectionTimeoutInSeconds` <a name="ResetServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds"></a>

```csharp
private void ResetServerlessConnectionTimeoutInSeconds()
```

##### `ResetServiceMode` <a name="ResetServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode"></a>

```csharp
private void ResetServiceMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsClientCertEnabled` <a name="ResetTlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled"></a>

```csharp
private void ResetTlsClientCertEnabled()
```

##### `ResetUpstreamEndpoint` <a name="ResetUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint"></a>

```csharp
private void ResetUpstreamEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SignalrService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SignalrService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SignalrService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SignalrService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SignalrService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SignalrService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SignalrService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SignalrService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SignalrService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort">PublicPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint">UpstreamEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput">AadAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput">ConnectivityLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput">CorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput">HttpRequestLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput">LiveTraceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput">LiveTraceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput">MessagingLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput">ServerlessConnectionTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput">ServiceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput">TlsClientCertEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput">UpstreamEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled">LiveTraceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds">ServerlessConnectionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode">ServiceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cors"></a>

```csharp
public SignalrServiceCorsList Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identity"></a>

```csharp
public SignalrServiceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `LiveTrace`<sup>Required</sup> <a name="LiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace"></a>

```csharp
public SignalrServiceLiveTraceOutputReference LiveTrace { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort"></a>

```csharp
public double PublicPort { get; }
```

- *Type:* double

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.sku"></a>

```csharp
public SignalrServiceSkuOutputReference Sku { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts"></a>

```csharp
public SignalrServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a>

---

##### `UpstreamEndpoint`<sup>Required</sup> <a name="UpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint"></a>

```csharp
public SignalrServiceUpstreamEndpointList UpstreamEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a>

---

##### `AadAuthEnabledInput`<sup>Optional</sup> <a name="AadAuthEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput"></a>

```csharp
public object AadAuthEnabledInput { get; }
```

- *Type:* object

---

##### `ConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="ConnectivityLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput"></a>

```csharp
public object ConnectivityLogsEnabledInput { get; }
```

- *Type:* object

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput"></a>

```csharp
public object CorsInput { get; }
```

- *Type:* object

---

##### `HttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="HttpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput"></a>

```csharp
public object HttpRequestLogsEnabledInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput"></a>

```csharp
public SignalrServiceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LiveTraceEnabledInput`<sup>Optional</sup> <a name="LiveTraceEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput"></a>

```csharp
public object LiveTraceEnabledInput { get; }
```

- *Type:* object

---

##### `LiveTraceInput`<sup>Optional</sup> <a name="LiveTraceInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput"></a>

```csharp
public SignalrServiceLiveTrace LiveTraceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput"></a>

```csharp
public object LocalAuthEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MessagingLogsEnabledInput`<sup>Optional</sup> <a name="MessagingLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput"></a>

```csharp
public object MessagingLogsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServerlessConnectionTimeoutInSecondsInput`<sup>Optional</sup> <a name="ServerlessConnectionTimeoutInSecondsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput"></a>

```csharp
public double ServerlessConnectionTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ServiceModeInput`<sup>Optional</sup> <a name="ServiceModeInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput"></a>

```csharp
public string ServiceModeInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput"></a>

```csharp
public SignalrServiceSku SkuInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsClientCertEnabledInput`<sup>Optional</sup> <a name="TlsClientCertEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput"></a>

```csharp
public object TlsClientCertEnabledInput { get; }
```

- *Type:* object

---

##### `UpstreamEndpointInput`<sup>Optional</sup> <a name="UpstreamEndpointInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput"></a>

```csharp
public object UpstreamEndpointInput { get; }
```

- *Type:* object

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled"></a>

```csharp
public object AadAuthEnabled { get; }
```

- *Type:* object

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled"></a>

```csharp
public object ConnectivityLogsEnabled { get; }
```

- *Type:* object

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled"></a>

```csharp
public object HttpRequestLogsEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LiveTraceEnabled`<sup>Required</sup> <a name="LiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled"></a>

```csharp
public object LiveTraceEnabled { get; }
```

- *Type:* object

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled"></a>

```csharp
public object MessagingLogsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServerlessConnectionTimeoutInSeconds`<sup>Required</sup> <a name="ServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds"></a>

```csharp
public double ServerlessConnectionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ServiceMode`<sup>Required</sup> <a name="ServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode"></a>

```csharp
public string ServiceMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled"></a>

```csharp
public object TlsClientCertEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceConfig <a name="SignalrServiceConfig" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceConfig {
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
    SignalrServiceSku Sku,
    object AadAuthEnabled = null,
    object ConnectivityLogsEnabled = null,
    object Cors = null,
    object HttpRequestLogsEnabled = null,
    string Id = null,
    SignalrServiceIdentity Identity = null,
    SignalrServiceLiveTrace LiveTrace = null,
    object LiveTraceEnabled = null,
    object LocalAuthEnabled = null,
    object MessagingLogsEnabled = null,
    object PublicNetworkAccessEnabled = null,
    double ServerlessConnectionTimeoutInSeconds = null,
    string ServiceMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SignalrServiceTimeouts Timeouts = null,
    object TlsClientCertEnabled = null,
    object UpstreamEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#location SignalrService#location}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#name SignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors">Cors</a></code> | <code>object</code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#id SignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled">LiveTraceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds">ServerlessConnectionTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode">ServiceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#tags SignalrService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint">UpstreamEndpoint</a></code> | <code>object</code> | upstream_endpoint block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#location SignalrService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#name SignalrService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku"></a>

```csharp
public SignalrServiceSku Sku { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#sku SignalrService#sku}

---

##### `AadAuthEnabled`<sup>Optional</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled"></a>

```csharp
public object AadAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}.

---

##### `ConnectivityLogsEnabled`<sup>Optional</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled"></a>

```csharp
public object ConnectivityLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors"></a>

```csharp
public object Cors { get; set; }
```

- *Type:* object

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#cors SignalrService#cors}

---

##### `HttpRequestLogsEnabled`<sup>Optional</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled"></a>

```csharp
public object HttpRequestLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#id SignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity"></a>

```csharp
public SignalrServiceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#identity SignalrService#identity}

---

##### `LiveTrace`<sup>Optional</sup> <a name="LiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace"></a>

```csharp
public SignalrServiceLiveTrace LiveTrace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#live_trace SignalrService#live_trace}

---

##### `LiveTraceEnabled`<sup>Optional</sup> <a name="LiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled"></a>

```csharp
public object LiveTraceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}.

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}.

---

##### `MessagingLogsEnabled`<sup>Optional</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled"></a>

```csharp
public object MessagingLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}.

---

##### `ServerlessConnectionTimeoutInSeconds`<sup>Optional</sup> <a name="ServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds"></a>

```csharp
public double ServerlessConnectionTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}.

---

##### `ServiceMode`<sup>Optional</sup> <a name="ServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode"></a>

```csharp
public string ServiceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#tags SignalrService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts"></a>

```csharp
public SignalrServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#timeouts SignalrService#timeouts}

---

##### `TlsClientCertEnabled`<sup>Optional</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled"></a>

```csharp
public object TlsClientCertEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}.

---

##### `UpstreamEndpoint`<sup>Optional</sup> <a name="UpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint"></a>

```csharp
public object UpstreamEndpoint { get; set; }
```

- *Type:* object

upstream_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}

---

### SignalrServiceCors <a name="SignalrServiceCors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceCors {
    string[] AllowedOrigins
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}.

---

### SignalrServiceIdentity <a name="SignalrServiceIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#type SignalrService#type}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#type SignalrService#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}.

---

### SignalrServiceLiveTrace <a name="SignalrServiceLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceLiveTrace {
    object ConnectivityLogsEnabled = null,
    object Enabled = null,
    object HttpRequestLogsEnabled = null,
    object MessagingLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#enabled SignalrService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |

---

##### `ConnectivityLogsEnabled`<sup>Optional</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled"></a>

```csharp
public object ConnectivityLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#enabled SignalrService#enabled}.

---

##### `HttpRequestLogsEnabled`<sup>Optional</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled"></a>

```csharp
public object HttpRequestLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `MessagingLogsEnabled`<sup>Optional</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled"></a>

```csharp
public object MessagingLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

### SignalrServiceSku <a name="SignalrServiceSku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceSku {
    double Capacity,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#capacity SignalrService#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#name SignalrService#name}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#capacity SignalrService#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#name SignalrService#name}.

---

### SignalrServiceTimeouts <a name="SignalrServiceTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#create SignalrService#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#delete SignalrService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#read SignalrService#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#update SignalrService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#create SignalrService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#delete SignalrService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#read SignalrService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#update SignalrService#update}.

---

### SignalrServiceUpstreamEndpoint <a name="SignalrServiceUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceUpstreamEndpoint {
    string[] CategoryPattern,
    string[] EventPattern,
    string[] HubPattern,
    string UrlTemplate,
    string UserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern">CategoryPattern</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern">EventPattern</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern">HubPattern</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate">UrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#url_template SignalrService#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}. |

---

##### `CategoryPattern`<sup>Required</sup> <a name="CategoryPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern"></a>

```csharp
public string[] CategoryPattern { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}.

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern"></a>

```csharp
public string[] EventPattern { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}.

---

##### `HubPattern`<sup>Required</sup> <a name="HubPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern"></a>

```csharp
public string[] HubPattern { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}.

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate"></a>

```csharp
public string UrlTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#url_template SignalrService#url_template}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceCorsList <a name="SignalrServiceCorsList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceCorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get"></a>

```csharp
private SignalrServiceCorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SignalrServiceCorsOutputReference <a name="SignalrServiceCorsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SignalrServiceIdentityOutputReference <a name="SignalrServiceIdentityOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue"></a>

```csharp
public SignalrServiceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---


### SignalrServiceLiveTraceOutputReference <a name="SignalrServiceLiveTraceOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceLiveTraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled">ResetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled">ResetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled">ResetMessagingLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityLogsEnabled` <a name="ResetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```csharp
private void ResetConnectivityLogsEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHttpRequestLogsEnabled` <a name="ResetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```csharp
private void ResetHttpRequestLogsEnabled()
```

##### `ResetMessagingLogsEnabled` <a name="ResetMessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```csharp
private void ResetMessagingLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput">ConnectivityLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput">HttpRequestLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput">MessagingLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="ConnectivityLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```csharp
public object ConnectivityLogsEnabledInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="HttpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```csharp
public object HttpRequestLogsEnabledInput { get; }
```

- *Type:* object

---

##### `MessagingLogsEnabledInput`<sup>Optional</sup> <a name="MessagingLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```csharp
public object MessagingLogsEnabledInput { get; }
```

- *Type:* object

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```csharp
public object ConnectivityLogsEnabled { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```csharp
public object HttpRequestLogsEnabled { get; }
```

- *Type:* object

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```csharp
public object MessagingLogsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue"></a>

```csharp
public SignalrServiceLiveTrace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---


### SignalrServiceSkuOutputReference <a name="SignalrServiceSkuOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceSkuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue"></a>

```csharp
public SignalrServiceSku InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---


### SignalrServiceTimeoutsOutputReference <a name="SignalrServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SignalrServiceUpstreamEndpointList <a name="SignalrServiceUpstreamEndpointList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceUpstreamEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get"></a>

```csharp
private SignalrServiceUpstreamEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SignalrServiceUpstreamEndpointOutputReference <a name="SignalrServiceUpstreamEndpointOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SignalrServiceUpstreamEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput">CategoryPatternInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput">HubPatternInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput">UrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern">CategoryPattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern">EventPattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern">HubPattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate">UrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryPatternInput`<sup>Optional</sup> <a name="CategoryPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput"></a>

```csharp
public string[] CategoryPatternInput { get; }
```

- *Type:* string[]

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput"></a>

```csharp
public string[] EventPatternInput { get; }
```

- *Type:* string[]

---

##### `HubPatternInput`<sup>Optional</sup> <a name="HubPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput"></a>

```csharp
public string[] HubPatternInput { get; }
```

- *Type:* string[]

---

##### `UrlTemplateInput`<sup>Optional</sup> <a name="UrlTemplateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput"></a>

```csharp
public string UrlTemplateInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `CategoryPattern`<sup>Required</sup> <a name="CategoryPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern"></a>

```csharp
public string[] CategoryPattern { get; }
```

- *Type:* string[]

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern"></a>

```csharp
public string[] EventPattern { get; }
```

- *Type:* string[]

---

##### `HubPattern`<sup>Required</sup> <a name="HubPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern"></a>

```csharp
public string[] HubPattern { get; }
```

- *Type:* string[]

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate"></a>

```csharp
public string UrlTemplate { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



