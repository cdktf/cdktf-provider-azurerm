# `vpnServerConfiguration` Submodule <a name="`vpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.vpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnServerConfiguration <a name="VpnServerConfiguration" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfiguration(Construct Scope, string Id, VpnServerConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig">VpnServerConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig">VpnServerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication">PutAzureActiveDirectoryAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate">PutClientRevokedCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate">PutClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy">PutIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius">PutRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetAzureActiveDirectoryAuthentication">ResetAzureActiveDirectoryAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRevokedCertificate">ResetClientRevokedCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRootCertificate">ResetClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetIpsecPolicy">ResetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetRadius">ResetRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetVpnProtocols">ResetVpnProtocols</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureActiveDirectoryAuthentication` <a name="PutAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication"></a>

```csharp
private void PutAzureActiveDirectoryAuthentication(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication.parameter.value"></a>

- *Type:* object

---

##### `PutClientRevokedCertificate` <a name="PutClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate"></a>

```csharp
private void PutClientRevokedCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate.parameter.value"></a>

- *Type:* object

---

##### `PutClientRootCertificate` <a name="PutClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate"></a>

```csharp
private void PutClientRootCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate.parameter.value"></a>

- *Type:* object

---

##### `PutIpsecPolicy` <a name="PutIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy"></a>

```csharp
private void PutIpsecPolicy(VpnServerConfigurationIpsecPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---

##### `PutRadius` <a name="PutRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius"></a>

```csharp
private void PutRadius(VpnServerConfigurationRadius Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(VpnServerConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>

---

##### `ResetAzureActiveDirectoryAuthentication` <a name="ResetAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetAzureActiveDirectoryAuthentication"></a>

```csharp
private void ResetAzureActiveDirectoryAuthentication()
```

##### `ResetClientRevokedCertificate` <a name="ResetClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRevokedCertificate"></a>

```csharp
private void ResetClientRevokedCertificate()
```

##### `ResetClientRootCertificate` <a name="ResetClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRootCertificate"></a>

```csharp
private void ResetClientRootCertificate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpsecPolicy` <a name="ResetIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetIpsecPolicy"></a>

```csharp
private void ResetIpsecPolicy()
```

##### `ResetRadius` <a name="ResetRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetRadius"></a>

```csharp
private void ResetRadius()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpnProtocols` <a name="ResetVpnProtocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetVpnProtocols"></a>

```csharp
private void ResetVpnProtocols()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnServerConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnServerConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnServerConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnServerConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpnServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnServerConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpnServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthentication">AzureActiveDirectoryAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList">VpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificate">ClientRevokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList">VpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList">VpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference">VpnServerConfigurationIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radius">Radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference">VpnServerConfigurationRadiusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference">VpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthenticationInput">AzureActiveDirectoryAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificateInput">ClientRevokedCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificateInput">ClientRootCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicyInput">IpsecPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radiusInput">RadiusInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypesInput">VpnAuthenticationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocolsInput">VpnProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypes">VpnAuthenticationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocols">VpnProtocols</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureActiveDirectoryAuthentication`<sup>Required</sup> <a name="AzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```csharp
public VpnServerConfigurationAzureActiveDirectoryAuthenticationList AzureActiveDirectoryAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList">VpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `ClientRevokedCertificate`<sup>Required</sup> <a name="ClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificate"></a>

```csharp
public VpnServerConfigurationClientRevokedCertificateList ClientRevokedCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList">VpnServerConfigurationClientRevokedCertificateList</a>

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificate"></a>

```csharp
public VpnServerConfigurationClientRootCertificateList ClientRootCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList">VpnServerConfigurationClientRootCertificateList</a>

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicy"></a>

```csharp
public VpnServerConfigurationIpsecPolicyOutputReference IpsecPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference">VpnServerConfigurationIpsecPolicyOutputReference</a>

---

##### `Radius`<sup>Required</sup> <a name="Radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radius"></a>

```csharp
public VpnServerConfigurationRadiusOutputReference Radius { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference">VpnServerConfigurationRadiusOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeouts"></a>

```csharp
public VpnServerConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference">VpnServerConfigurationTimeoutsOutputReference</a>

---

##### `AzureActiveDirectoryAuthenticationInput`<sup>Optional</sup> <a name="AzureActiveDirectoryAuthenticationInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthenticationInput"></a>

```csharp
public object AzureActiveDirectoryAuthenticationInput { get; }
```

- *Type:* object

---

##### `ClientRevokedCertificateInput`<sup>Optional</sup> <a name="ClientRevokedCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificateInput"></a>

```csharp
public object ClientRevokedCertificateInput { get; }
```

- *Type:* object

---

##### `ClientRootCertificateInput`<sup>Optional</sup> <a name="ClientRootCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificateInput"></a>

```csharp
public object ClientRootCertificateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpsecPolicyInput`<sup>Optional</sup> <a name="IpsecPolicyInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicyInput"></a>

```csharp
public VpnServerConfigurationIpsecPolicy IpsecPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RadiusInput`<sup>Optional</sup> <a name="RadiusInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radiusInput"></a>

```csharp
public VpnServerConfigurationRadius RadiusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpnAuthenticationTypesInput`<sup>Optional</sup> <a name="VpnAuthenticationTypesInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypesInput"></a>

```csharp
public string[] VpnAuthenticationTypesInput { get; }
```

- *Type:* string[]

---

##### `VpnProtocolsInput`<sup>Optional</sup> <a name="VpnProtocolsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocolsInput"></a>

```csharp
public string[] VpnProtocolsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpnAuthenticationTypes`<sup>Required</sup> <a name="VpnAuthenticationTypes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```csharp
public string[] VpnAuthenticationTypes { get; }
```

- *Type:* string[]

---

##### `VpnProtocols`<sup>Required</sup> <a name="VpnProtocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocols"></a>

```csharp
public string[] VpnProtocols { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnServerConfigurationAzureActiveDirectoryAuthentication <a name="VpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationAzureActiveDirectoryAuthentication {
    string Audience,
    string Issuer,
    string Tenant
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.audience">Audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.tenant">Tenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}.

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}.

---

### VpnServerConfigurationClientRevokedCertificate <a name="VpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationClientRevokedCertificate {
    string Name,
    string Thumbprint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}.

---

### VpnServerConfigurationClientRootCertificate <a name="VpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationClientRootCertificate {
    string Name,
    string PublicCertData
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.publicCertData">PublicCertData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.publicCertData"></a>

```csharp
public string PublicCertData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}.

---

### VpnServerConfigurationConfig <a name="VpnServerConfigurationConfig" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationConfig {
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
    string[] VpnAuthenticationTypes,
    object AzureActiveDirectoryAuthentication = null,
    object ClientRevokedCertificate = null,
    object ClientRootCertificate = null,
    string Id = null,
    VpnServerConfigurationIpsecPolicy IpsecPolicy = null,
    VpnServerConfigurationRadius Radius = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VpnServerConfigurationTimeouts Timeouts = null,
    string[] VpnProtocols = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnAuthenticationTypes">VpnAuthenticationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.azureActiveDirectoryAuthentication">AzureActiveDirectoryAuthentication</a></code> | <code>object</code> | azure_active_directory_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRevokedCertificate">ClientRevokedCertificate</a></code> | <code>object</code> | client_revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRootCertificate">ClientRootCertificate</a></code> | <code>object</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.radius">Radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | radius block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnProtocols">VpnProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}.

---

##### `VpnAuthenticationTypes`<sup>Required</sup> <a name="VpnAuthenticationTypes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnAuthenticationTypes"></a>

```csharp
public string[] VpnAuthenticationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}.

---

##### `AzureActiveDirectoryAuthentication`<sup>Optional</sup> <a name="AzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.azureActiveDirectoryAuthentication"></a>

```csharp
public object AzureActiveDirectoryAuthentication { get; set; }
```

- *Type:* object

azure_active_directory_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}

---

##### `ClientRevokedCertificate`<sup>Optional</sup> <a name="ClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRevokedCertificate"></a>

```csharp
public object ClientRevokedCertificate { get; set; }
```

- *Type:* object

client_revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}

---

##### `ClientRootCertificate`<sup>Optional</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRootCertificate"></a>

```csharp
public object ClientRootCertificate { get; set; }
```

- *Type:* object

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpsecPolicy`<sup>Optional</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.ipsecPolicy"></a>

```csharp
public VpnServerConfigurationIpsecPolicy IpsecPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ipsec_policy VpnServerConfiguration#ipsec_policy}

---

##### `Radius`<sup>Optional</sup> <a name="Radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.radius"></a>

```csharp
public VpnServerConfigurationRadius Radius { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#radius VpnServerConfiguration#radius}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.timeouts"></a>

```csharp
public VpnServerConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#timeouts VpnServerConfiguration#timeouts}

---

##### `VpnProtocols`<sup>Optional</sup> <a name="VpnProtocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnProtocols"></a>

```csharp
public string[] VpnProtocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}.

---

### VpnServerConfigurationIpsecPolicy <a name="VpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationIpsecPolicy {
    string DhGroup,
    string IkeEncryption,
    string IkeIntegrity,
    string IpsecEncryption,
    string IpsecIntegrity,
    string PfsGroup,
    double SaDataSizeKilobytes,
    double SaLifetimeSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.dhGroup">DhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeEncryption">IkeEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeIntegrity">IkeIntegrity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecEncryption">IpsecEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.pfsGroup">PfsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saDataSizeKilobytes">SaDataSizeKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saLifetimeSeconds">SaLifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.dhGroup"></a>

```csharp
public string DhGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}.

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeEncryption"></a>

```csharp
public string IkeEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}.

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeIntegrity"></a>

```csharp
public string IkeIntegrity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}.

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecEncryption"></a>

```csharp
public string IpsecEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}.

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecIntegrity"></a>

```csharp
public string IpsecIntegrity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}.

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.pfsGroup"></a>

```csharp
public string PfsGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}.

---

##### `SaDataSizeKilobytes`<sup>Required</sup> <a name="SaDataSizeKilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saDataSizeKilobytes"></a>

```csharp
public double SaDataSizeKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}.

---

##### `SaLifetimeSeconds`<sup>Required</sup> <a name="SaLifetimeSeconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saLifetimeSeconds"></a>

```csharp
public double SaLifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}.

---

### VpnServerConfigurationRadius <a name="VpnServerConfigurationRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadius {
    object ClientRootCertificate = null,
    object Server = null,
    object ServerRootCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.clientRootCertificate">ClientRootCertificate</a></code> | <code>object</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.server">Server</a></code> | <code>object</code> | server block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.serverRootCertificate">ServerRootCertificate</a></code> | <code>object</code> | server_root_certificate block. |

---

##### `ClientRootCertificate`<sup>Optional</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.clientRootCertificate"></a>

```csharp
public object ClientRootCertificate { get; set; }
```

- *Type:* object

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `Server`<sup>Optional</sup> <a name="Server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.server"></a>

```csharp
public object Server { get; set; }
```

- *Type:* object

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#server VpnServerConfiguration#server}

---

##### `ServerRootCertificate`<sup>Optional</sup> <a name="ServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.serverRootCertificate"></a>

```csharp
public object ServerRootCertificate { get; set; }
```

- *Type:* object

server_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}

---

### VpnServerConfigurationRadiusClientRootCertificate <a name="VpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusClientRootCertificate {
    string Name,
    string Thumbprint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}.

---

### VpnServerConfigurationRadiusServer <a name="VpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusServer {
    string Address,
    double Score,
    string Secret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.score">Score</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}.

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.score"></a>

```csharp
public double Score { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}.

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}.

---

### VpnServerConfigurationRadiusServerRootCertificate <a name="VpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusServerRootCertificate {
    string Name,
    string PublicCertData
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.publicCertData">PublicCertData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.publicCertData"></a>

```csharp
public string PublicCertData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}.

---

### VpnServerConfigurationTimeouts <a name="VpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="VpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationAzureActiveDirectoryAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```csharp
private VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationClientRevokedCertificateList <a name="VpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationClientRevokedCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get"></a>

```csharp
private VpnServerConfigurationClientRevokedCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationClientRevokedCertificateOutputReference <a name="VpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationClientRevokedCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationClientRootCertificateList <a name="VpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationClientRootCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get"></a>

```csharp
private VpnServerConfigurationClientRootCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationClientRootCertificateOutputReference <a name="VpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationClientRootCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertDataInput">PublicCertDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicCertDataInput`<sup>Optional</sup> <a name="PublicCertDataInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertDataInput"></a>

```csharp
public string PublicCertDataInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```csharp
public string PublicCertData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationIpsecPolicyOutputReference <a name="VpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationIpsecPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryptionInput">IkeEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrityInput">IkeIntegrityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryptionInput">IpsecEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrityInput">IpsecIntegrityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroupInput">PfsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytesInput">SaDataSizeKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSecondsInput">SaLifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">SaDataSizeKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">SaLifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroupInput"></a>

```csharp
public string DhGroupInput { get; }
```

- *Type:* string

---

##### `IkeEncryptionInput`<sup>Optional</sup> <a name="IkeEncryptionInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```csharp
public string IkeEncryptionInput { get; }
```

- *Type:* string

---

##### `IkeIntegrityInput`<sup>Optional</sup> <a name="IkeIntegrityInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```csharp
public string IkeIntegrityInput { get; }
```

- *Type:* string

---

##### `IpsecEncryptionInput`<sup>Optional</sup> <a name="IpsecEncryptionInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```csharp
public string IpsecEncryptionInput { get; }
```

- *Type:* string

---

##### `IpsecIntegrityInput`<sup>Optional</sup> <a name="IpsecIntegrityInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```csharp
public string IpsecIntegrityInput { get; }
```

- *Type:* string

---

##### `PfsGroupInput`<sup>Optional</sup> <a name="PfsGroupInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```csharp
public string PfsGroupInput { get; }
```

- *Type:* string

---

##### `SaDataSizeKilobytesInput`<sup>Optional</sup> <a name="SaDataSizeKilobytesInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytesInput"></a>

```csharp
public double SaDataSizeKilobytesInput { get; }
```

- *Type:* double

---

##### `SaLifetimeSecondsInput`<sup>Optional</sup> <a name="SaLifetimeSecondsInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSecondsInput"></a>

```csharp
public double SaLifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```csharp
public string IkeEncryption { get; }
```

- *Type:* string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```csharp
public string IkeIntegrity { get; }
```

- *Type:* string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```csharp
public string IpsecEncryption { get; }
```

- *Type:* string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```csharp
public string IpsecIntegrity { get; }
```

- *Type:* string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```csharp
public string PfsGroup { get; }
```

- *Type:* string

---

##### `SaDataSizeKilobytes`<sup>Required</sup> <a name="SaDataSizeKilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```csharp
public double SaDataSizeKilobytes { get; }
```

- *Type:* double

---

##### `SaLifetimeSeconds`<sup>Required</sup> <a name="SaLifetimeSeconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```csharp
public double SaLifetimeSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```csharp
public VpnServerConfigurationIpsecPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---


### VpnServerConfigurationRadiusClientRootCertificateList <a name="VpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusClientRootCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```csharp
private VpnServerConfigurationRadiusClientRootCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="VpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusClientRootCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationRadiusOutputReference <a name="VpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate">PutClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer">PutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate">PutServerRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetClientRootCertificate">ResetClientRootCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServer">ResetServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServerRootCertificate">ResetServerRootCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientRootCertificate` <a name="PutClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate"></a>

```csharp
private void PutClientRootCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate.parameter.value"></a>

- *Type:* object

---

##### `PutServer` <a name="PutServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer"></a>

```csharp
private void PutServer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer.parameter.value"></a>

- *Type:* object

---

##### `PutServerRootCertificate` <a name="PutServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate"></a>

```csharp
private void PutServerRootCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate.parameter.value"></a>

- *Type:* object

---

##### `ResetClientRootCertificate` <a name="ResetClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetClientRootCertificate"></a>

```csharp
private void ResetClientRootCertificate()
```

##### `ResetServer` <a name="ResetServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServer"></a>

```csharp
private void ResetServer()
```

##### `ResetServerRootCertificate` <a name="ResetServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServerRootCertificate"></a>

```csharp
private void ResetServerRootCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList">VpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.server">Server</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList">VpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">ServerRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList">VpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificateInput">ClientRootCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverInput">ServerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificateInput">ServerRootCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```csharp
public VpnServerConfigurationRadiusClientRootCertificateList ClientRootCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList">VpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.server"></a>

```csharp
public VpnServerConfigurationRadiusServerList Server { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList">VpnServerConfigurationRadiusServerList</a>

---

##### `ServerRootCertificate`<sup>Required</sup> <a name="ServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```csharp
public VpnServerConfigurationRadiusServerRootCertificateList ServerRootCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList">VpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `ClientRootCertificateInput`<sup>Optional</sup> <a name="ClientRootCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificateInput"></a>

```csharp
public object ClientRootCertificateInput { get; }
```

- *Type:* object

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverInput"></a>

```csharp
public object ServerInput { get; }
```

- *Type:* object

---

##### `ServerRootCertificateInput`<sup>Optional</sup> <a name="ServerRootCertificateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificateInput"></a>

```csharp
public object ServerRootCertificateInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```csharp
public VpnServerConfigurationRadius InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---


### VpnServerConfigurationRadiusServerList <a name="VpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusServerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get"></a>

```csharp
private VpnServerConfigurationRadiusServerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationRadiusServerOutputReference <a name="VpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.scoreInput">ScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.score">Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `ScoreInput`<sup>Optional</sup> <a name="ScoreInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.scoreInput"></a>

```csharp
public double ScoreInput { get; }
```

- *Type:* double

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```csharp
public double Score { get; }
```

- *Type:* double

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationRadiusServerRootCertificateList <a name="VpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusServerRootCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```csharp
private VpnServerConfigurationRadiusServerRootCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="VpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationRadiusServerRootCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertDataInput">PublicCertDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicCertDataInput`<sup>Optional</sup> <a name="PublicCertDataInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertDataInput"></a>

```csharp
public string PublicCertDataInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```csharp
public string PublicCertData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnServerConfigurationTimeoutsOutputReference <a name="VpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnServerConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



