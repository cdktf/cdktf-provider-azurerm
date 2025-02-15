# `cognitiveAccount` Submodule <a name="`cognitiveAccount` Submodule" id="@cdktf/provider-azurerm.cognitiveAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccount <a name="CognitiveAccount" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account azurerm_cognitive_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccount(Construct Scope, string Id, CognitiveAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig">CognitiveAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig">CognitiveAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls">PutNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceId">ResetCustomQuestionAnsweringSearchServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceKey">ResetCustomQuestionAnsweringSearchServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomSubdomainName">ResetCustomSubdomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetDynamicThrottlingEnabled">ResetDynamicThrottlingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetFqdns">ResetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadClientId">ResetMetricsAdvisorAadClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadTenantId">ResetMetricsAdvisorAadTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorSuperUserName">ResetMetricsAdvisorSuperUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorWebsiteName">ResetMetricsAdvisorWebsiteName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetNetworkAcls">ResetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOutboundNetworkAccessRestricted">ResetOutboundNetworkAccessRestricted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetQnaRuntimeEndpoint">ResetQnaRuntimeEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey"></a>

```csharp
private void PutCustomerManagedKey(CognitiveAccountCustomerManagedKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity"></a>

```csharp
private void PutIdentity(CognitiveAccountIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---

##### `PutNetworkAcls` <a name="PutNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls"></a>

```csharp
private void PutNetworkAcls(CognitiveAccountNetworkAcls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage"></a>

```csharp
private void PutStorage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(CognitiveAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

---

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetCustomQuestionAnsweringSearchServiceId` <a name="ResetCustomQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceId"></a>

```csharp
private void ResetCustomQuestionAnsweringSearchServiceId()
```

##### `ResetCustomQuestionAnsweringSearchServiceKey` <a name="ResetCustomQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceKey"></a>

```csharp
private void ResetCustomQuestionAnsweringSearchServiceKey()
```

##### `ResetCustomSubdomainName` <a name="ResetCustomSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomSubdomainName"></a>

```csharp
private void ResetCustomSubdomainName()
```

##### `ResetDynamicThrottlingEnabled` <a name="ResetDynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetDynamicThrottlingEnabled"></a>

```csharp
private void ResetDynamicThrottlingEnabled()
```

##### `ResetFqdns` <a name="ResetFqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetFqdns"></a>

```csharp
private void ResetFqdns()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetMetricsAdvisorAadClientId` <a name="ResetMetricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadClientId"></a>

```csharp
private void ResetMetricsAdvisorAadClientId()
```

##### `ResetMetricsAdvisorAadTenantId` <a name="ResetMetricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadTenantId"></a>

```csharp
private void ResetMetricsAdvisorAadTenantId()
```

##### `ResetMetricsAdvisorSuperUserName` <a name="ResetMetricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorSuperUserName"></a>

```csharp
private void ResetMetricsAdvisorSuperUserName()
```

##### `ResetMetricsAdvisorWebsiteName` <a name="ResetMetricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorWebsiteName"></a>

```csharp
private void ResetMetricsAdvisorWebsiteName()
```

##### `ResetNetworkAcls` <a name="ResetNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetNetworkAcls"></a>

```csharp
private void ResetNetworkAcls()
```

##### `ResetOutboundNetworkAccessRestricted` <a name="ResetOutboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOutboundNetworkAccessRestricted"></a>

```csharp
private void ResetOutboundNetworkAccessRestricted()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetQnaRuntimeEndpoint` <a name="ResetQnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetQnaRuntimeEndpoint"></a>

```csharp
private void ResetQnaRuntimeEndpoint()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitiveAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CognitiveAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CognitiveAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference">CognitiveAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference">CognitiveAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference">CognitiveAccountNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList">CognitiveAccountStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference">CognitiveAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceIdInput">CustomQuestionAnsweringSearchServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKeyInput">CustomQuestionAnsweringSearchServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainNameInput">CustomSubdomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabledInput">DynamicThrottlingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdnsInput">FqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientIdInput">MetricsAdvisorAadClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantIdInput">MetricsAdvisorAadTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserNameInput">MetricsAdvisorSuperUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteNameInput">MetricsAdvisorWebsiteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAclsInput">NetworkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestrictedInput">OutboundNetworkAccessRestrictedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpointInput">QnaRuntimeEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storageInput">StorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceId">CustomQuestionAnsweringSearchServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKey">CustomQuestionAnsweringSearchServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainName">CustomSubdomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabled">DynamicThrottlingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdns">Fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientId">MetricsAdvisorAadClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantId">MetricsAdvisorAadTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserName">MetricsAdvisorSuperUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteName">MetricsAdvisorWebsiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestricted">OutboundNetworkAccessRestricted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpoint">QnaRuntimeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKey"></a>

```csharp
public CognitiveAccountCustomerManagedKeyOutputReference CustomerManagedKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference">CognitiveAccountCustomerManagedKeyOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identity"></a>

```csharp
public CognitiveAccountIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference">CognitiveAccountIdentityOutputReference</a>

---

##### `NetworkAcls`<sup>Required</sup> <a name="NetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAcls"></a>

```csharp
public CognitiveAccountNetworkAclsOutputReference NetworkAcls { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference">CognitiveAccountNetworkAclsOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storage"></a>

```csharp
public CognitiveAccountStorageList Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList">CognitiveAccountStorageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeouts"></a>

```csharp
public CognitiveAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference">CognitiveAccountTimeoutsOutputReference</a>

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKeyInput"></a>

```csharp
public CognitiveAccountCustomerManagedKey CustomerManagedKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---

##### `CustomQuestionAnsweringSearchServiceIdInput`<sup>Optional</sup> <a name="CustomQuestionAnsweringSearchServiceIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceIdInput"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceIdInput { get; }
```

- *Type:* string

---

##### `CustomQuestionAnsweringSearchServiceKeyInput`<sup>Optional</sup> <a name="CustomQuestionAnsweringSearchServiceKeyInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKeyInput"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceKeyInput { get; }
```

- *Type:* string

---

##### `CustomSubdomainNameInput`<sup>Optional</sup> <a name="CustomSubdomainNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainNameInput"></a>

```csharp
public string CustomSubdomainNameInput { get; }
```

- *Type:* string

---

##### `DynamicThrottlingEnabledInput`<sup>Optional</sup> <a name="DynamicThrottlingEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabledInput"></a>

```csharp
public object DynamicThrottlingEnabledInput { get; }
```

- *Type:* object

---

##### `FqdnsInput`<sup>Optional</sup> <a name="FqdnsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdnsInput"></a>

```csharp
public string[] FqdnsInput { get; }
```

- *Type:* string[]

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identityInput"></a>

```csharp
public CognitiveAccountIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabledInput"></a>

```csharp
public object LocalAuthEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetricsAdvisorAadClientIdInput`<sup>Optional</sup> <a name="MetricsAdvisorAadClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientIdInput"></a>

```csharp
public string MetricsAdvisorAadClientIdInput { get; }
```

- *Type:* string

---

##### `MetricsAdvisorAadTenantIdInput`<sup>Optional</sup> <a name="MetricsAdvisorAadTenantIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantIdInput"></a>

```csharp
public string MetricsAdvisorAadTenantIdInput { get; }
```

- *Type:* string

---

##### `MetricsAdvisorSuperUserNameInput`<sup>Optional</sup> <a name="MetricsAdvisorSuperUserNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserNameInput"></a>

```csharp
public string MetricsAdvisorSuperUserNameInput { get; }
```

- *Type:* string

---

##### `MetricsAdvisorWebsiteNameInput`<sup>Optional</sup> <a name="MetricsAdvisorWebsiteNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteNameInput"></a>

```csharp
public string MetricsAdvisorWebsiteNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkAclsInput`<sup>Optional</sup> <a name="NetworkAclsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAclsInput"></a>

```csharp
public CognitiveAccountNetworkAcls NetworkAclsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---

##### `OutboundNetworkAccessRestrictedInput`<sup>Optional</sup> <a name="OutboundNetworkAccessRestrictedInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestrictedInput"></a>

```csharp
public object OutboundNetworkAccessRestrictedInput { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `QnaRuntimeEndpointInput`<sup>Optional</sup> <a name="QnaRuntimeEndpointInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpointInput"></a>

```csharp
public string QnaRuntimeEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storageInput"></a>

```csharp
public object StorageInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CustomQuestionAnsweringSearchServiceId`<sup>Required</sup> <a name="CustomQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceId"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceId { get; }
```

- *Type:* string

---

##### `CustomQuestionAnsweringSearchServiceKey`<sup>Required</sup> <a name="CustomQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKey"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceKey { get; }
```

- *Type:* string

---

##### `CustomSubdomainName`<sup>Required</sup> <a name="CustomSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainName"></a>

```csharp
public string CustomSubdomainName { get; }
```

- *Type:* string

---

##### `DynamicThrottlingEnabled`<sup>Required</sup> <a name="DynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabled"></a>

```csharp
public object DynamicThrottlingEnabled { get; }
```

- *Type:* object

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdns"></a>

```csharp
public string[] Fqdns { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MetricsAdvisorAadClientId`<sup>Required</sup> <a name="MetricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientId"></a>

```csharp
public string MetricsAdvisorAadClientId { get; }
```

- *Type:* string

---

##### `MetricsAdvisorAadTenantId`<sup>Required</sup> <a name="MetricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantId"></a>

```csharp
public string MetricsAdvisorAadTenantId { get; }
```

- *Type:* string

---

##### `MetricsAdvisorSuperUserName`<sup>Required</sup> <a name="MetricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserName"></a>

```csharp
public string MetricsAdvisorSuperUserName { get; }
```

- *Type:* string

---

##### `MetricsAdvisorWebsiteName`<sup>Required</sup> <a name="MetricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteName"></a>

```csharp
public string MetricsAdvisorWebsiteName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutboundNetworkAccessRestricted`<sup>Required</sup> <a name="OutboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestricted"></a>

```csharp
public object OutboundNetworkAccessRestricted { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `QnaRuntimeEndpoint`<sup>Required</sup> <a name="QnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpoint"></a>

```csharp
public string QnaRuntimeEndpoint { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConfig <a name="CognitiveAccountConfig" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Kind,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    CognitiveAccountCustomerManagedKey CustomerManagedKey = null,
    string CustomQuestionAnsweringSearchServiceId = null,
    string CustomQuestionAnsweringSearchServiceKey = null,
    string CustomSubdomainName = null,
    object DynamicThrottlingEnabled = null,
    string[] Fqdns = null,
    string Id = null,
    CognitiveAccountIdentity Identity = null,
    object LocalAuthEnabled = null,
    string MetricsAdvisorAadClientId = null,
    string MetricsAdvisorAadTenantId = null,
    string MetricsAdvisorSuperUserName = null,
    string MetricsAdvisorWebsiteName = null,
    CognitiveAccountNetworkAcls NetworkAcls = null,
    object OutboundNetworkAccessRestricted = null,
    object PublicNetworkAccessEnabled = null,
    string QnaRuntimeEndpoint = null,
    object Storage = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    CognitiveAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#location CognitiveAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#name CognitiveAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceId">CustomQuestionAnsweringSearchServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceKey">CustomQuestionAnsweringSearchServiceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customSubdomainName">CustomSubdomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dynamicThrottlingEnabled">DynamicThrottlingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.fqdns">Fqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#id CognitiveAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadClientId">MetricsAdvisorAadClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadTenantId">MetricsAdvisorAadTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorSuperUserName">MetricsAdvisorSuperUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorWebsiteName">MetricsAdvisorWebsiteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.outboundNetworkAccessRestricted">OutboundNetworkAccessRestricted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.qnaRuntimeEndpoint">QnaRuntimeEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.storage">Storage</a></code> | <code>object</code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#location CognitiveAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#name CognitiveAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customerManagedKey"></a>

```csharp
public CognitiveAccountCustomerManagedKey CustomerManagedKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#customer_managed_key CognitiveAccount#customer_managed_key}

---

##### `CustomQuestionAnsweringSearchServiceId`<sup>Optional</sup> <a name="CustomQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceId"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}.

---

##### `CustomQuestionAnsweringSearchServiceKey`<sup>Optional</sup> <a name="CustomQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceKey"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}.

---

##### `CustomSubdomainName`<sup>Optional</sup> <a name="CustomSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customSubdomainName"></a>

```csharp
public string CustomSubdomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}.

---

##### `DynamicThrottlingEnabled`<sup>Optional</sup> <a name="DynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dynamicThrottlingEnabled"></a>

```csharp
public object DynamicThrottlingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}.

---

##### `Fqdns`<sup>Optional</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.fqdns"></a>

```csharp
public string[] Fqdns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#id CognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.identity"></a>

```csharp
public CognitiveAccountIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity CognitiveAccount#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}.

---

##### `MetricsAdvisorAadClientId`<sup>Optional</sup> <a name="MetricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadClientId"></a>

```csharp
public string MetricsAdvisorAadClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}.

---

##### `MetricsAdvisorAadTenantId`<sup>Optional</sup> <a name="MetricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadTenantId"></a>

```csharp
public string MetricsAdvisorAadTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}.

---

##### `MetricsAdvisorSuperUserName`<sup>Optional</sup> <a name="MetricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorSuperUserName"></a>

```csharp
public string MetricsAdvisorSuperUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}.

---

##### `MetricsAdvisorWebsiteName`<sup>Optional</sup> <a name="MetricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorWebsiteName"></a>

```csharp
public string MetricsAdvisorWebsiteName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}.

---

##### `NetworkAcls`<sup>Optional</sup> <a name="NetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.networkAcls"></a>

```csharp
public CognitiveAccountNetworkAcls NetworkAcls { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#network_acls CognitiveAccount#network_acls}

---

##### `OutboundNetworkAccessRestricted`<sup>Optional</sup> <a name="OutboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.outboundNetworkAccessRestricted"></a>

```csharp
public object OutboundNetworkAccessRestricted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}.

---

##### `QnaRuntimeEndpoint`<sup>Optional</sup> <a name="QnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.qnaRuntimeEndpoint"></a>

```csharp
public string QnaRuntimeEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.storage"></a>

```csharp
public object Storage { get; set; }
```

- *Type:* object

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#storage CognitiveAccount#storage}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.timeouts"></a>

```csharp
public CognitiveAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#timeouts CognitiveAccount#timeouts}

---

### CognitiveAccountCustomerManagedKey <a name="CognitiveAccountCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountCustomerManagedKey {
    string KeyVaultKeyId,
    string IdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}.

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}.

---

### CognitiveAccountIdentity <a name="CognitiveAccountIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#type CognitiveAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#type CognitiveAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}.

---

### CognitiveAccountNetworkAcls <a name="CognitiveAccountNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountNetworkAcls {
    string DefaultAction,
    string Bypass = null,
    string[] IpRules = null,
    object VirtualNetworkRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.bypass">Bypass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#bypass CognitiveAccount#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.ipRules">IpRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.virtualNetworkRules">VirtualNetworkRules</a></code> | <code>object</code> | virtual_network_rules block. |

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}.

---

##### `Bypass`<sup>Optional</sup> <a name="Bypass" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.bypass"></a>

```csharp
public string Bypass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#bypass CognitiveAccount#bypass}.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.ipRules"></a>

```csharp
public string[] IpRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}.

---

##### `VirtualNetworkRules`<sup>Optional</sup> <a name="VirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.virtualNetworkRules"></a>

```csharp
public object VirtualNetworkRules { get; set; }
```

- *Type:* object

virtual_network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#virtual_network_rules CognitiveAccount#virtual_network_rules}

---

### CognitiveAccountNetworkAclsVirtualNetworkRules <a name="CognitiveAccountNetworkAclsVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountNetworkAclsVirtualNetworkRules {
    string SubnetId,
    object IgnoreMissingVnetServiceEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}.

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}.

---

### CognitiveAccountStorage <a name="CognitiveAccountStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountStorage {
    string StorageAccountId,
    string IdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}. |

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}.

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}.

---

### CognitiveAccountTimeouts <a name="CognitiveAccountTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#create CognitiveAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#read CognitiveAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#update CognitiveAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#create CognitiveAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#read CognitiveAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/cognitive_account#update CognitiveAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountCustomerManagedKeyOutputReference <a name="CognitiveAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountCustomerManagedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resetIdentityClientId"></a>

```csharp
private void ResetIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientIdInput"></a>

```csharp
public string IdentityClientIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```csharp
public CognitiveAccountCustomerManagedKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---


### CognitiveAccountIdentityOutputReference <a name="CognitiveAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public CognitiveAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---


### CognitiveAccountNetworkAclsOutputReference <a name="CognitiveAccountNetworkAclsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountNetworkAclsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules">PutVirtualNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetBypass">ResetBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetVirtualNetworkRules">ResetVirtualNetworkRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualNetworkRules` <a name="PutVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules"></a>

```csharp
private void PutVirtualNetworkRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules.parameter.value"></a>

- *Type:* object

---

##### `ResetBypass` <a name="ResetBypass" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetBypass"></a>

```csharp
private void ResetBypass()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetIpRules"></a>

```csharp
private void ResetIpRules()
```

##### `ResetVirtualNetworkRules` <a name="ResetVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetVirtualNetworkRules"></a>

```csharp
private void ResetVirtualNetworkRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules">VirtualNetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList">CognitiveAccountNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.bypassInput">BypassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRulesInput">VirtualNetworkRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.bypass">Bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRules">IpRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualNetworkRules`<sup>Required</sup> <a name="VirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```csharp
public CognitiveAccountNetworkAclsVirtualNetworkRulesList VirtualNetworkRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList">CognitiveAccountNetworkAclsVirtualNetworkRulesList</a>

---

##### `BypassInput`<sup>Optional</sup> <a name="BypassInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.bypassInput"></a>

```csharp
public string BypassInput { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRulesInput"></a>

```csharp
public string[] IpRulesInput { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkRulesInput`<sup>Optional</sup> <a name="VirtualNetworkRulesInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRulesInput"></a>

```csharp
public object VirtualNetworkRulesInput { get; }
```

- *Type:* object

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.bypass"></a>

```csharp
public string Bypass { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRules"></a>

```csharp
public string[] IpRules { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.internalValue"></a>

```csharp
public CognitiveAccountNetworkAcls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---


### CognitiveAccountNetworkAclsVirtualNetworkRulesList <a name="CognitiveAccountNetworkAclsVirtualNetworkRulesList" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountNetworkAclsVirtualNetworkRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get"></a>

```csharp
private CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference <a name="CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">ResetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreMissingVnetServiceEndpoint` <a name="ResetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```csharp
private void ResetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">IgnoreMissingVnetServiceEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```csharp
public object IgnoreMissingVnetServiceEndpointInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitiveAccountStorageList <a name="CognitiveAccountStorageList" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get"></a>

```csharp
private CognitiveAccountStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitiveAccountStorageOutputReference <a name="CognitiveAccountStorageOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resetIdentityClientId"></a>

```csharp
private void ResetIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientIdInput"></a>

```csharp
public string IdentityClientIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitiveAccountTimeoutsOutputReference <a name="CognitiveAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



