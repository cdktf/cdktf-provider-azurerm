# `firewallPolicy` Submodule <a name="`firewallPolicy` Submodule" id="@cdktf/provider-azurerm.firewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallPolicy <a name="FirewallPolicy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy azurerm_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicy(Construct Scope, string Id, FirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig">FirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig">FirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy">PutExplicitProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights">PutInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection">PutIntrusionDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist">PutThreatIntelligenceAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate">PutTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetAutoLearnPrivateRangesEnabled">ResetAutoLearnPrivateRangesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetBasePolicyId">ResetBasePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetExplicitProxy">ResetExplicitProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetInsights">ResetInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIntrusionDetection">ResetIntrusionDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetPrivateIpRanges">ResetPrivateIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSqlRedirectAllowed">ResetSqlRedirectAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceAllowlist">ResetThreatIntelligenceAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceMode">ResetThreatIntelligenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTlsCertificate">ResetTlsCertificate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDns` <a name="PutDns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns"></a>

```csharp
private void PutDns(FirewallPolicyDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

---

##### `PutExplicitProxy` <a name="PutExplicitProxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy"></a>

```csharp
private void PutExplicitProxy(FirewallPolicyExplicitProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putExplicitProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity"></a>

```csharp
private void PutIdentity(FirewallPolicyIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

---

##### `PutInsights` <a name="PutInsights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights"></a>

```csharp
private void PutInsights(FirewallPolicyInsights Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putInsights.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

---

##### `PutIntrusionDetection` <a name="PutIntrusionDetection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection"></a>

```csharp
private void PutIntrusionDetection(FirewallPolicyIntrusionDetection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putIntrusionDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

---

##### `PutThreatIntelligenceAllowlist` <a name="PutThreatIntelligenceAllowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist"></a>

```csharp
private void PutThreatIntelligenceAllowlist(FirewallPolicyThreatIntelligenceAllowlistStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putThreatIntelligenceAllowlist.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(FirewallPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>

---

##### `PutTlsCertificate` <a name="PutTlsCertificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate"></a>

```csharp
private void PutTlsCertificate(FirewallPolicyTlsCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.putTlsCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

---

##### `ResetAutoLearnPrivateRangesEnabled` <a name="ResetAutoLearnPrivateRangesEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetAutoLearnPrivateRangesEnabled"></a>

```csharp
private void ResetAutoLearnPrivateRangesEnabled()
```

##### `ResetBasePolicyId` <a name="ResetBasePolicyId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetBasePolicyId"></a>

```csharp
private void ResetBasePolicyId()
```

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetDns"></a>

```csharp
private void ResetDns()
```

##### `ResetExplicitProxy` <a name="ResetExplicitProxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetExplicitProxy"></a>

```csharp
private void ResetExplicitProxy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInsights` <a name="ResetInsights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetInsights"></a>

```csharp
private void ResetInsights()
```

##### `ResetIntrusionDetection` <a name="ResetIntrusionDetection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetIntrusionDetection"></a>

```csharp
private void ResetIntrusionDetection()
```

##### `ResetPrivateIpRanges` <a name="ResetPrivateIpRanges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetPrivateIpRanges"></a>

```csharp
private void ResetPrivateIpRanges()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetSqlRedirectAllowed` <a name="ResetSqlRedirectAllowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetSqlRedirectAllowed"></a>

```csharp
private void ResetSqlRedirectAllowed()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThreatIntelligenceAllowlist` <a name="ResetThreatIntelligenceAllowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceAllowlist"></a>

```csharp
private void ResetThreatIntelligenceAllowlist()
```

##### `ResetThreatIntelligenceMode` <a name="ResetThreatIntelligenceMode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetThreatIntelligenceMode"></a>

```csharp
private void ResetThreatIntelligenceMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsCertificate` <a name="ResetTlsCertificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.resetTlsCertificate"></a>

```csharp
private void ResetTlsCertificate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.childPolicies">ChildPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference">FirewallPolicyDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxy">ExplicitProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference">FirewallPolicyExplicitProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.firewalls">Firewalls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference">FirewallPolicyIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insights">Insights</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference">FirewallPolicyInsightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetection">IntrusionDetection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference">FirewallPolicyIntrusionDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.ruleCollectionGroups">RuleCollectionGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlist">ThreatIntelligenceAllowlist</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference">FirewallPolicyThreatIntelligenceAllowlistStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference">FirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificate">TlsCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference">FirewallPolicyTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabledInput">AutoLearnPrivateRangesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyIdInput">BasePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxyInput">ExplicitProxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insightsInput">InsightsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetectionInput">IntrusionDetectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRangesInput">PrivateIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowedInput">SqlRedirectAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlistInput">ThreatIntelligenceAllowlistInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceModeInput">ThreatIntelligenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificateInput">TlsCertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabled">AutoLearnPrivateRangesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyId">BasePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRanges">PrivateIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowed">SqlRedirectAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceMode">ThreatIntelligenceMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ChildPolicies`<sup>Required</sup> <a name="ChildPolicies" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.childPolicies"></a>

```csharp
public string[] ChildPolicies { get; }
```

- *Type:* string[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dns"></a>

```csharp
public FirewallPolicyDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference">FirewallPolicyDnsOutputReference</a>

---

##### `ExplicitProxy`<sup>Required</sup> <a name="ExplicitProxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxy"></a>

```csharp
public FirewallPolicyExplicitProxyOutputReference ExplicitProxy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference">FirewallPolicyExplicitProxyOutputReference</a>

---

##### `Firewalls`<sup>Required</sup> <a name="Firewalls" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.firewalls"></a>

```csharp
public string[] Firewalls { get; }
```

- *Type:* string[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identity"></a>

```csharp
public FirewallPolicyIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference">FirewallPolicyIdentityOutputReference</a>

---

##### `Insights`<sup>Required</sup> <a name="Insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insights"></a>

```csharp
public FirewallPolicyInsightsOutputReference Insights { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference">FirewallPolicyInsightsOutputReference</a>

---

##### `IntrusionDetection`<sup>Required</sup> <a name="IntrusionDetection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetection"></a>

```csharp
public FirewallPolicyIntrusionDetectionOutputReference IntrusionDetection { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference">FirewallPolicyIntrusionDetectionOutputReference</a>

---

##### `RuleCollectionGroups`<sup>Required</sup> <a name="RuleCollectionGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.ruleCollectionGroups"></a>

```csharp
public string[] RuleCollectionGroups { get; }
```

- *Type:* string[]

---

##### `ThreatIntelligenceAllowlist`<sup>Required</sup> <a name="ThreatIntelligenceAllowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlist"></a>

```csharp
public FirewallPolicyThreatIntelligenceAllowlistStructOutputReference ThreatIntelligenceAllowlist { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference">FirewallPolicyThreatIntelligenceAllowlistStructOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeouts"></a>

```csharp
public FirewallPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference">FirewallPolicyTimeoutsOutputReference</a>

---

##### `TlsCertificate`<sup>Required</sup> <a name="TlsCertificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificate"></a>

```csharp
public FirewallPolicyTlsCertificateOutputReference TlsCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference">FirewallPolicyTlsCertificateOutputReference</a>

---

##### `AutoLearnPrivateRangesEnabledInput`<sup>Optional</sup> <a name="AutoLearnPrivateRangesEnabledInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabledInput"></a>

```csharp
public object AutoLearnPrivateRangesEnabledInput { get; }
```

- *Type:* object

---

##### `BasePolicyIdInput`<sup>Optional</sup> <a name="BasePolicyIdInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyIdInput"></a>

```csharp
public string BasePolicyIdInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.dnsInput"></a>

```csharp
public FirewallPolicyDns DnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

---

##### `ExplicitProxyInput`<sup>Optional</sup> <a name="ExplicitProxyInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.explicitProxyInput"></a>

```csharp
public FirewallPolicyExplicitProxy ExplicitProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.identityInput"></a>

```csharp
public FirewallPolicyIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsightsInput`<sup>Optional</sup> <a name="InsightsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.insightsInput"></a>

```csharp
public FirewallPolicyInsights InsightsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

---

##### `IntrusionDetectionInput`<sup>Optional</sup> <a name="IntrusionDetectionInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.intrusionDetectionInput"></a>

```csharp
public FirewallPolicyIntrusionDetection IntrusionDetectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateIpRangesInput`<sup>Optional</sup> <a name="PrivateIpRangesInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRangesInput"></a>

```csharp
public string[] PrivateIpRangesInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `SqlRedirectAllowedInput`<sup>Optional</sup> <a name="SqlRedirectAllowedInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowedInput"></a>

```csharp
public object SqlRedirectAllowedInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThreatIntelligenceAllowlistInput`<sup>Optional</sup> <a name="ThreatIntelligenceAllowlistInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceAllowlistInput"></a>

```csharp
public FirewallPolicyThreatIntelligenceAllowlistStruct ThreatIntelligenceAllowlistInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

---

##### `ThreatIntelligenceModeInput`<sup>Optional</sup> <a name="ThreatIntelligenceModeInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceModeInput"></a>

```csharp
public string ThreatIntelligenceModeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsCertificateInput`<sup>Optional</sup> <a name="TlsCertificateInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tlsCertificateInput"></a>

```csharp
public FirewallPolicyTlsCertificate TlsCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

---

##### `AutoLearnPrivateRangesEnabled`<sup>Required</sup> <a name="AutoLearnPrivateRangesEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.autoLearnPrivateRangesEnabled"></a>

```csharp
public object AutoLearnPrivateRangesEnabled { get; }
```

- *Type:* object

---

##### `BasePolicyId`<sup>Required</sup> <a name="BasePolicyId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.basePolicyId"></a>

```csharp
public string BasePolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateIpRanges`<sup>Required</sup> <a name="PrivateIpRanges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.privateIpRanges"></a>

```csharp
public string[] PrivateIpRanges { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `SqlRedirectAllowed`<sup>Required</sup> <a name="SqlRedirectAllowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.sqlRedirectAllowed"></a>

```csharp
public object SqlRedirectAllowed { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThreatIntelligenceMode`<sup>Required</sup> <a name="ThreatIntelligenceMode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.threatIntelligenceMode"></a>

```csharp
public string ThreatIntelligenceMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallPolicyConfig <a name="FirewallPolicyConfig" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyConfig {
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
    object AutoLearnPrivateRangesEnabled = null,
    string BasePolicyId = null,
    FirewallPolicyDns Dns = null,
    FirewallPolicyExplicitProxy ExplicitProxy = null,
    string Id = null,
    FirewallPolicyIdentity Identity = null,
    FirewallPolicyInsights Insights = null,
    FirewallPolicyIntrusionDetection IntrusionDetection = null,
    string[] PrivateIpRanges = null,
    string Sku = null,
    object SqlRedirectAllowed = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FirewallPolicyThreatIntelligenceAllowlistStruct ThreatIntelligenceAllowlist = null,
    string ThreatIntelligenceMode = null,
    FirewallPolicyTimeouts Timeouts = null,
    FirewallPolicyTlsCertificate TlsCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#location FirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.autoLearnPrivateRangesEnabled">AutoLearnPrivateRangesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.basePolicyId">BasePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.explicitProxy">ExplicitProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | explicit_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.insights">Insights</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | insights block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.intrusionDetection">IntrusionDetection</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | intrusion_detection block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.privateIpRanges">PrivateIpRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sqlRedirectAllowed">SqlRedirectAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceAllowlist">ThreatIntelligenceAllowlist</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | threat_intelligence_allowlist block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceMode">ThreatIntelligenceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tlsCertificate">TlsCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | tls_certificate block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#location FirewallPolicy#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}.

---

##### `AutoLearnPrivateRangesEnabled`<sup>Optional</sup> <a name="AutoLearnPrivateRangesEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.autoLearnPrivateRangesEnabled"></a>

```csharp
public object AutoLearnPrivateRangesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}.

---

##### `BasePolicyId`<sup>Optional</sup> <a name="BasePolicyId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.basePolicyId"></a>

```csharp
public string BasePolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.dns"></a>

```csharp
public FirewallPolicyDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#dns FirewallPolicy#dns}

---

##### `ExplicitProxy`<sup>Optional</sup> <a name="ExplicitProxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.explicitProxy"></a>

```csharp
public FirewallPolicyExplicitProxy ExplicitProxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

explicit_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#explicit_proxy FirewallPolicy#explicit_proxy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.identity"></a>

```csharp
public FirewallPolicyIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#identity FirewallPolicy#identity}

---

##### `Insights`<sup>Optional</sup> <a name="Insights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.insights"></a>

```csharp
public FirewallPolicyInsights Insights { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#insights FirewallPolicy#insights}

---

##### `IntrusionDetection`<sup>Optional</sup> <a name="IntrusionDetection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.intrusionDetection"></a>

```csharp
public FirewallPolicyIntrusionDetection IntrusionDetection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

intrusion_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#intrusion_detection FirewallPolicy#intrusion_detection}

---

##### `PrivateIpRanges`<sup>Optional</sup> <a name="PrivateIpRanges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.privateIpRanges"></a>

```csharp
public string[] PrivateIpRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}.

---

##### `SqlRedirectAllowed`<sup>Optional</sup> <a name="SqlRedirectAllowed" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.sqlRedirectAllowed"></a>

```csharp
public object SqlRedirectAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}.

---

##### `ThreatIntelligenceAllowlist`<sup>Optional</sup> <a name="ThreatIntelligenceAllowlist" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceAllowlist"></a>

```csharp
public FirewallPolicyThreatIntelligenceAllowlistStruct ThreatIntelligenceAllowlist { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

threat_intelligence_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}

---

##### `ThreatIntelligenceMode`<sup>Optional</sup> <a name="ThreatIntelligenceMode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.threatIntelligenceMode"></a>

```csharp
public string ThreatIntelligenceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.timeouts"></a>

```csharp
public FirewallPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts">FirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#timeouts FirewallPolicy#timeouts}

---

##### `TlsCertificate`<sup>Optional</sup> <a name="TlsCertificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyConfig.property.tlsCertificate"></a>

```csharp
public FirewallPolicyTlsCertificate TlsCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

tls_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#tls_certificate FirewallPolicy#tls_certificate}

---

### FirewallPolicyDns <a name="FirewallPolicyDns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyDns {
    object ProxyEnabled = null,
    string[] Servers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.proxyEnabled">ProxyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.servers">Servers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#servers FirewallPolicy#servers}. |

---

##### `ProxyEnabled`<sup>Optional</sup> <a name="ProxyEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.proxyEnabled"></a>

```csharp
public object ProxyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}.

---

##### `Servers`<sup>Optional</sup> <a name="Servers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns.property.servers"></a>

```csharp
public string[] Servers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#servers FirewallPolicy#servers}.

---

### FirewallPolicyExplicitProxy <a name="FirewallPolicyExplicitProxy" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyExplicitProxy {
    object Enabled = null,
    object EnablePacFile = null,
    double HttpPort = null,
    double HttpsPort = null,
    string PacFile = null,
    double PacFilePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enablePacFile">EnablePacFile</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#enable_pac_file FirewallPolicy#enable_pac_file}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpPort">HttpPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#http_port FirewallPolicy#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpsPort">HttpsPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#https_port FirewallPolicy#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFile">PacFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#pac_file FirewallPolicy#pac_file}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFilePort">PacFilePort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#pac_file_port FirewallPolicy#pac_file_port}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}.

---

##### `EnablePacFile`<sup>Optional</sup> <a name="EnablePacFile" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.enablePacFile"></a>

```csharp
public object EnablePacFile { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#enable_pac_file FirewallPolicy#enable_pac_file}.

---

##### `HttpPort`<sup>Optional</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpPort"></a>

```csharp
public double HttpPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#http_port FirewallPolicy#http_port}.

---

##### `HttpsPort`<sup>Optional</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.httpsPort"></a>

```csharp
public double HttpsPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#https_port FirewallPolicy#https_port}.

---

##### `PacFile`<sup>Optional</sup> <a name="PacFile" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFile"></a>

```csharp
public string PacFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#pac_file FirewallPolicy#pac_file}.

---

##### `PacFilePort`<sup>Optional</sup> <a name="PacFilePort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy.property.pacFilePort"></a>

```csharp
public double PacFilePort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#pac_file_port FirewallPolicy#pac_file_port}.

---

### FirewallPolicyIdentity <a name="FirewallPolicyIdentity" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#type FirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#identity_ids FirewallPolicy#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#type FirewallPolicy#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#identity_ids FirewallPolicy#identity_ids}.

---

### FirewallPolicyInsights <a name="FirewallPolicyInsights" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyInsights {
    string DefaultLogAnalyticsWorkspaceId,
    object Enabled,
    object LogAnalyticsWorkspace = null,
    double RetentionInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.defaultLogAnalyticsWorkspaceId">DefaultLogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.logAnalyticsWorkspace">LogAnalyticsWorkspace</a></code> | <code>object</code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}. |

---

##### `DefaultLogAnalyticsWorkspaceId`<sup>Required</sup> <a name="DefaultLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.defaultLogAnalyticsWorkspaceId"></a>

```csharp
public string DefaultLogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}.

---

##### `LogAnalyticsWorkspace`<sup>Optional</sup> <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.logAnalyticsWorkspace"></a>

```csharp
public object LogAnalyticsWorkspace { get; set; }
```

- *Type:* object

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#log_analytics_workspace FirewallPolicy#log_analytics_workspace}

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}.

---

### FirewallPolicyInsightsLogAnalyticsWorkspace <a name="FirewallPolicyInsightsLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyInsightsLogAnalyticsWorkspace {
    string FirewallLocation,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.firewallLocation">FirewallLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#firewall_location FirewallPolicy#firewall_location}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |

---

##### `FirewallLocation`<sup>Required</sup> <a name="FirewallLocation" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.firewallLocation"></a>

```csharp
public string FirewallLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#firewall_location FirewallPolicy#firewall_location}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspace.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FirewallPolicyIntrusionDetection <a name="FirewallPolicyIntrusionDetection" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetection {
    string Mode = null,
    string[] PrivateRanges = null,
    object SignatureOverrides = null,
    object TrafficBypass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#mode FirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.privateRanges">PrivateRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#private_ranges FirewallPolicy#private_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.signatureOverrides">SignatureOverrides</a></code> | <code>object</code> | signature_overrides block. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.trafficBypass">TrafficBypass</a></code> | <code>object</code> | traffic_bypass block. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#mode FirewallPolicy#mode}.

---

##### `PrivateRanges`<sup>Optional</sup> <a name="PrivateRanges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.privateRanges"></a>

```csharp
public string[] PrivateRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#private_ranges FirewallPolicy#private_ranges}.

---

##### `SignatureOverrides`<sup>Optional</sup> <a name="SignatureOverrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.signatureOverrides"></a>

```csharp
public object SignatureOverrides { get; set; }
```

- *Type:* object

signature_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#signature_overrides FirewallPolicy#signature_overrides}

---

##### `TrafficBypass`<sup>Optional</sup> <a name="TrafficBypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection.property.trafficBypass"></a>

```csharp
public object TrafficBypass { get; set; }
```

- *Type:* object

traffic_bypass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#traffic_bypass FirewallPolicy#traffic_bypass}

---

### FirewallPolicyIntrusionDetectionSignatureOverrides <a name="FirewallPolicyIntrusionDetectionSignatureOverrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionSignatureOverrides {
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#id FirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#state FirewallPolicy#state}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#id FirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverrides.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#state FirewallPolicy#state}.

---

### FirewallPolicyIntrusionDetectionTrafficBypass <a name="FirewallPolicyIntrusionDetectionTrafficBypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionTrafficBypass {
    string Name,
    string Protocol,
    string Description = null,
    string[] DestinationAddresses = null,
    string[] DestinationIpGroups = null,
    string[] DestinationPorts = null,
    string[] SourceAddresses = null,
    string[] SourceIpGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#protocol FirewallPolicy#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#description FirewallPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#destination_addresses FirewallPolicy#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationIpGroups">DestinationIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#destination_ip_groups FirewallPolicy#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#destination_ports FirewallPolicy#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#source_addresses FirewallPolicy#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceIpGroups">SourceIpGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#source_ip_groups FirewallPolicy#source_ip_groups}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#protocol FirewallPolicy#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#description FirewallPolicy#description}.

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#destination_addresses FirewallPolicy#destination_addresses}.

---

##### `DestinationIpGroups`<sup>Optional</sup> <a name="DestinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationIpGroups"></a>

```csharp
public string[] DestinationIpGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#destination_ip_groups FirewallPolicy#destination_ip_groups}.

---

##### `DestinationPorts`<sup>Optional</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#destination_ports FirewallPolicy#destination_ports}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#source_addresses FirewallPolicy#source_addresses}.

---

##### `SourceIpGroups`<sup>Optional</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypass.property.sourceIpGroups"></a>

```csharp
public string[] SourceIpGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#source_ip_groups FirewallPolicy#source_ip_groups}.

---

### FirewallPolicyThreatIntelligenceAllowlistStruct <a name="FirewallPolicyThreatIntelligenceAllowlistStruct" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyThreatIntelligenceAllowlistStruct {
    string[] Fqdns = null,
    string[] IpAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.fqdns">Fqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#fqdns FirewallPolicy#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}. |

---

##### `Fqdns`<sup>Optional</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.fqdns"></a>

```csharp
public string[] Fqdns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#fqdns FirewallPolicy#fqdns}.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}.

---

### FirewallPolicyTimeouts <a name="FirewallPolicyTimeouts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#create FirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#delete FirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#read FirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#update FirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#create FirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#delete FirewallPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#read FirewallPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#update FirewallPolicy#update}.

---

### FirewallPolicyTlsCertificate <a name="FirewallPolicyTlsCertificate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyTlsCertificate {
    string KeyVaultSecretId,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#name FirewallPolicy#name}. |

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.keyVaultSecretId"></a>

```csharp
public string KeyVaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/firewall_policy#name FirewallPolicy#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallPolicyDnsOutputReference <a name="FirewallPolicyDnsOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetProxyEnabled">ResetProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetServers">ResetServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProxyEnabled` <a name="ResetProxyEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetProxyEnabled"></a>

```csharp
private void ResetProxyEnabled()
```

##### `ResetServers` <a name="ResetServers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.resetServers"></a>

```csharp
private void ResetServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabledInput">ProxyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.serversInput">ServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabled">ProxyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.servers">Servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProxyEnabledInput`<sup>Optional</sup> <a name="ProxyEnabledInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabledInput"></a>

```csharp
public object ProxyEnabledInput { get; }
```

- *Type:* object

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.serversInput"></a>

```csharp
public string[] ServersInput { get; }
```

- *Type:* string[]

---

##### `ProxyEnabled`<sup>Required</sup> <a name="ProxyEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.proxyEnabled"></a>

```csharp
public object ProxyEnabled { get; }
```

- *Type:* object

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.servers"></a>

```csharp
public string[] Servers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDnsOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyDns">FirewallPolicyDns</a>

---


### FirewallPolicyExplicitProxyOutputReference <a name="FirewallPolicyExplicitProxyOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyExplicitProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnablePacFile">ResetEnablePacFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpPort">ResetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpsPort">ResetHttpsPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFile">ResetPacFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFilePort">ResetPacFilePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnablePacFile` <a name="ResetEnablePacFile" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetEnablePacFile"></a>

```csharp
private void ResetEnablePacFile()
```

##### `ResetHttpPort` <a name="ResetHttpPort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpPort"></a>

```csharp
private void ResetHttpPort()
```

##### `ResetHttpsPort` <a name="ResetHttpsPort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetHttpsPort"></a>

```csharp
private void ResetHttpsPort()
```

##### `ResetPacFile` <a name="ResetPacFile" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFile"></a>

```csharp
private void ResetPacFile()
```

##### `ResetPacFilePort` <a name="ResetPacFilePort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.resetPacFilePort"></a>

```csharp
private void ResetPacFilePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFileInput">EnablePacFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFileInput">PacFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePortInput">PacFilePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFile">EnablePacFile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFile">PacFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePort">PacFilePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnablePacFileInput`<sup>Optional</sup> <a name="EnablePacFileInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFileInput"></a>

```csharp
public object EnablePacFileInput { get; }
```

- *Type:* object

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPortInput"></a>

```csharp
public double HttpPortInput { get; }
```

- *Type:* double

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPortInput"></a>

```csharp
public double HttpsPortInput { get; }
```

- *Type:* double

---

##### `PacFileInput`<sup>Optional</sup> <a name="PacFileInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFileInput"></a>

```csharp
public string PacFileInput { get; }
```

- *Type:* string

---

##### `PacFilePortInput`<sup>Optional</sup> <a name="PacFilePortInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePortInput"></a>

```csharp
public double PacFilePortInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnablePacFile`<sup>Required</sup> <a name="EnablePacFile" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.enablePacFile"></a>

```csharp
public object EnablePacFile { get; }
```

- *Type:* object

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `PacFile`<sup>Required</sup> <a name="PacFile" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFile"></a>

```csharp
public string PacFile { get; }
```

- *Type:* string

---

##### `PacFilePort`<sup>Required</sup> <a name="PacFilePort" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.pacFilePort"></a>

```csharp
public double PacFilePort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxyOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyExplicitProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyExplicitProxy">FirewallPolicyExplicitProxy</a>

---


### FirewallPolicyIdentityOutputReference <a name="FirewallPolicyIdentityOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentityOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIdentity">FirewallPolicyIdentity</a>

---


### FirewallPolicyInsightsLogAnalyticsWorkspaceList <a name="FirewallPolicyInsightsLogAnalyticsWorkspaceList" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyInsightsLogAnalyticsWorkspaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.get"></a>

```csharp
private FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference <a name="FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocationInput">FirewallLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocation">FirewallLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirewallLocationInput`<sup>Optional</sup> <a name="FirewallLocationInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocationInput"></a>

```csharp
public string FirewallLocationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `FirewallLocation`<sup>Required</sup> <a name="FirewallLocation" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.firewallLocation"></a>

```csharp
public string FirewallLocation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyInsightsOutputReference <a name="FirewallPolicyInsightsOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyInsightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.putLogAnalyticsWorkspace">PutLogAnalyticsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetLogAnalyticsWorkspace">ResetLogAnalyticsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogAnalyticsWorkspace` <a name="PutLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.putLogAnalyticsWorkspace"></a>

```csharp
private void PutLogAnalyticsWorkspace(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.putLogAnalyticsWorkspace.parameter.value"></a>

- *Type:* object

---

##### `ResetLogAnalyticsWorkspace` <a name="ResetLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetLogAnalyticsWorkspace"></a>

```csharp
private void ResetLogAnalyticsWorkspace()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspace">LogAnalyticsWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList">FirewallPolicyInsightsLogAnalyticsWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceIdInput">DefaultLogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspaceInput">LogAnalyticsWorkspaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceId">DefaultLogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspace`<sup>Required</sup> <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspace"></a>

```csharp
public FirewallPolicyInsightsLogAnalyticsWorkspaceList LogAnalyticsWorkspace { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsLogAnalyticsWorkspaceList">FirewallPolicyInsightsLogAnalyticsWorkspaceList</a>

---

##### `DefaultLogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="DefaultLogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceIdInput"></a>

```csharp
public string DefaultLogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogAnalyticsWorkspaceInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.logAnalyticsWorkspaceInput"></a>

```csharp
public object LogAnalyticsWorkspaceInput { get; }
```

- *Type:* object

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `DefaultLogAnalyticsWorkspaceId`<sup>Required</sup> <a name="DefaultLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.defaultLogAnalyticsWorkspaceId"></a>

```csharp
public string DefaultLogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsightsOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyInsights InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyInsights">FirewallPolicyInsights</a>

---


### FirewallPolicyIntrusionDetectionOutputReference <a name="FirewallPolicyIntrusionDetectionOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putSignatureOverrides">PutSignatureOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putTrafficBypass">PutTrafficBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetPrivateRanges">ResetPrivateRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetSignatureOverrides">ResetSignatureOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetTrafficBypass">ResetTrafficBypass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignatureOverrides` <a name="PutSignatureOverrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putSignatureOverrides"></a>

```csharp
private void PutSignatureOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putSignatureOverrides.parameter.value"></a>

- *Type:* object

---

##### `PutTrafficBypass` <a name="PutTrafficBypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putTrafficBypass"></a>

```csharp
private void PutTrafficBypass(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.putTrafficBypass.parameter.value"></a>

- *Type:* object

---

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetPrivateRanges` <a name="ResetPrivateRanges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetPrivateRanges"></a>

```csharp
private void ResetPrivateRanges()
```

##### `ResetSignatureOverrides` <a name="ResetSignatureOverrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetSignatureOverrides"></a>

```csharp
private void ResetSignatureOverrides()
```

##### `ResetTrafficBypass` <a name="ResetTrafficBypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.resetTrafficBypass"></a>

```csharp
private void ResetTrafficBypass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverrides">SignatureOverrides</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList">FirewallPolicyIntrusionDetectionSignatureOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypass">TrafficBypass</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList">FirewallPolicyIntrusionDetectionTrafficBypassList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRangesInput">PrivateRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverridesInput">SignatureOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypassInput">TrafficBypassInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRanges">PrivateRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignatureOverrides`<sup>Required</sup> <a name="SignatureOverrides" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverrides"></a>

```csharp
public FirewallPolicyIntrusionDetectionSignatureOverridesList SignatureOverrides { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList">FirewallPolicyIntrusionDetectionSignatureOverridesList</a>

---

##### `TrafficBypass`<sup>Required</sup> <a name="TrafficBypass" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypass"></a>

```csharp
public FirewallPolicyIntrusionDetectionTrafficBypassList TrafficBypass { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList">FirewallPolicyIntrusionDetectionTrafficBypassList</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PrivateRangesInput`<sup>Optional</sup> <a name="PrivateRangesInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRangesInput"></a>

```csharp
public string[] PrivateRangesInput { get; }
```

- *Type:* string[]

---

##### `SignatureOverridesInput`<sup>Optional</sup> <a name="SignatureOverridesInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.signatureOverridesInput"></a>

```csharp
public object SignatureOverridesInput { get; }
```

- *Type:* object

---

##### `TrafficBypassInput`<sup>Optional</sup> <a name="TrafficBypassInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.trafficBypassInput"></a>

```csharp
public object TrafficBypassInput { get; }
```

- *Type:* object

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PrivateRanges`<sup>Required</sup> <a name="PrivateRanges" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.privateRanges"></a>

```csharp
public string[] PrivateRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyIntrusionDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetection">FirewallPolicyIntrusionDetection</a>

---


### FirewallPolicyIntrusionDetectionSignatureOverridesList <a name="FirewallPolicyIntrusionDetectionSignatureOverridesList" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionSignatureOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.get"></a>

```csharp
private FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference <a name="FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyIntrusionDetectionTrafficBypassList <a name="FirewallPolicyIntrusionDetectionTrafficBypassList" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionTrafficBypassList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.get"></a>

```csharp
private FirewallPolicyIntrusionDetectionTrafficBypassOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyIntrusionDetectionTrafficBypassOutputReference <a name="FirewallPolicyIntrusionDetectionTrafficBypassOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyIntrusionDetectionTrafficBypassOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationIpGroups">ResetDestinationIpGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationPorts">ResetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceIpGroups">ResetSourceIpGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationAddresses"></a>

```csharp
private void ResetDestinationAddresses()
```

##### `ResetDestinationIpGroups` <a name="ResetDestinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationIpGroups"></a>

```csharp
private void ResetDestinationIpGroups()
```

##### `ResetDestinationPorts` <a name="ResetDestinationPorts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetDestinationPorts"></a>

```csharp
private void ResetDestinationPorts()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceAddresses"></a>

```csharp
private void ResetSourceAddresses()
```

##### `ResetSourceIpGroups` <a name="ResetSourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.resetSourceIpGroups"></a>

```csharp
private void ResetSourceIpGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroupsInput">DestinationIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroupsInput">SourceIpGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroups">DestinationIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroups">SourceIpGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddressesInput"></a>

```csharp
public string[] DestinationAddressesInput { get; }
```

- *Type:* string[]

---

##### `DestinationIpGroupsInput`<sup>Optional</sup> <a name="DestinationIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroupsInput"></a>

```csharp
public string[] DestinationIpGroupsInput { get; }
```

- *Type:* string[]

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPortsInput"></a>

```csharp
public string[] DestinationPortsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddressesInput"></a>

```csharp
public string[] SourceAddressesInput { get; }
```

- *Type:* string[]

---

##### `SourceIpGroupsInput`<sup>Optional</sup> <a name="SourceIpGroupsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroupsInput"></a>

```csharp
public string[] SourceIpGroupsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationIpGroups`<sup>Required</sup> <a name="DestinationIpGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationIpGroups"></a>

```csharp
public string[] DestinationIpGroups { get; }
```

- *Type:* string[]

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourceIpGroups`<sup>Required</sup> <a name="SourceIpGroups" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.sourceIpGroups"></a>

```csharp
public string[] SourceIpGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyIntrusionDetectionTrafficBypassOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyThreatIntelligenceAllowlistStructOutputReference <a name="FirewallPolicyThreatIntelligenceAllowlistStructOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyThreatIntelligenceAllowlistStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetFqdns">ResetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFqdns` <a name="ResetFqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetFqdns"></a>

```csharp
private void ResetFqdns()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdnsInput">FqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdns">Fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FqdnsInput`<sup>Optional</sup> <a name="FqdnsInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdnsInput"></a>

```csharp
public string[] FqdnsInput { get; }
```

- *Type:* string[]

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.fqdns"></a>

```csharp
public string[] Fqdns { get; }
```

- *Type:* string[]

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStructOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyThreatIntelligenceAllowlistStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyThreatIntelligenceAllowlistStruct">FirewallPolicyThreatIntelligenceAllowlistStruct</a>

---


### FirewallPolicyTimeoutsOutputReference <a name="FirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallPolicyTlsCertificateOutputReference <a name="FirewallPolicyTlsCertificateOutputReference" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FirewallPolicyTlsCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretIdInput">KeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyVaultSecretIdInput`<sup>Optional</sup> <a name="KeyVaultSecretIdInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretIdInput"></a>

```csharp
public string KeyVaultSecretIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.keyVaultSecretId"></a>

```csharp
public string KeyVaultSecretId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificateOutputReference.property.internalValue"></a>

```csharp
public FirewallPolicyTlsCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallPolicy.FirewallPolicyTlsCertificate">FirewallPolicyTlsCertificate</a>

---



