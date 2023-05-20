# `azurerm_mysql_server`

Refer to the Terraform Registory for docs: [`azurerm_mysql_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server).

# `mysqlServer` Submodule <a name="`mysqlServer` Submodule" id="@cdktf/provider-azurerm.mysqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlServer <a name="MysqlServer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server azurerm_mysql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServer(Construct Scope, string Id, MysqlServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig">MysqlServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig">MysqlServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy">PutThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLogin">ResetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLoginPassword">ResetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAutoGrowEnabled">ResetAutoGrowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetBackupRetentionDays">ResetBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreationSourceServerId">ResetCreationSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetGeoRedundantBackupEnabled">ResetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetInfrastructureEncryptionEnabled">ResetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetRestorePointInTime">ResetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetSslMinimalTlsVersionEnforced">ResetSslMinimalTlsVersionEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetStorageMb">ResetStorageMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetThreatDetectionPolicy">ResetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putIdentity"></a>

```csharp
private void PutIdentity(MysqlServerIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

---

##### `PutThreatDetectionPolicy` <a name="PutThreatDetectionPolicy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy"></a>

```csharp
private void PutThreatDetectionPolicy(MysqlServerThreatDetectionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>

---

##### `ResetAdministratorLogin` <a name="ResetAdministratorLogin" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLogin"></a>

```csharp
private void ResetAdministratorLogin()
```

##### `ResetAdministratorLoginPassword` <a name="ResetAdministratorLoginPassword" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLoginPassword"></a>

```csharp
private void ResetAdministratorLoginPassword()
```

##### `ResetAutoGrowEnabled` <a name="ResetAutoGrowEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAutoGrowEnabled"></a>

```csharp
private void ResetAutoGrowEnabled()
```

##### `ResetBackupRetentionDays` <a name="ResetBackupRetentionDays" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetBackupRetentionDays"></a>

```csharp
private void ResetBackupRetentionDays()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreateMode"></a>

```csharp
private void ResetCreateMode()
```

##### `ResetCreationSourceServerId` <a name="ResetCreationSourceServerId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreationSourceServerId"></a>

```csharp
private void ResetCreationSourceServerId()
```

##### `ResetGeoRedundantBackupEnabled` <a name="ResetGeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetGeoRedundantBackupEnabled"></a>

```csharp
private void ResetGeoRedundantBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetInfrastructureEncryptionEnabled"></a>

```csharp
private void ResetInfrastructureEncryptionEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetRestorePointInTime` <a name="ResetRestorePointInTime" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetRestorePointInTime"></a>

```csharp
private void ResetRestorePointInTime()
```

##### `ResetSslMinimalTlsVersionEnforced` <a name="ResetSslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetSslMinimalTlsVersionEnforced"></a>

```csharp
private void ResetSslMinimalTlsVersionEnforced()
```

##### `ResetStorageMb` <a name="ResetStorageMb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetStorageMb"></a>

```csharp
private void ResetStorageMb()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThreatDetectionPolicy` <a name="ResetThreatDetectionPolicy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetThreatDetectionPolicy"></a>

```csharp
private void ResetThreatDetectionPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference">MysqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicy">ThreatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference">MysqlServerThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference">MysqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabledInput">AutoGrowEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDaysInput">BackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createModeInput">CreateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerIdInput">CreationSourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabledInput">GeoRedundantBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTimeInput">RestorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabledInput">SslEnforcementEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforcedInput">SslMinimalTlsVersionEnforcedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMbInput">StorageMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicyInput">ThreatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLogin">AdministratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabled">AutoGrowEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createMode">CreateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerId">CreationSourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabled">SslEnforcementEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforced">SslMinimalTlsVersionEnforced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMb">StorageMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identity"></a>

```csharp
public MysqlServerIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference">MysqlServerIdentityOutputReference</a>

---

##### `ThreatDetectionPolicy`<sup>Required</sup> <a name="ThreatDetectionPolicy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicy"></a>

```csharp
public MysqlServerThreatDetectionPolicyOutputReference ThreatDetectionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference">MysqlServerThreatDetectionPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeouts"></a>

```csharp
public MysqlServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference">MysqlServerTimeoutsOutputReference</a>

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginInput"></a>

```csharp
public string AdministratorLoginInput { get; }
```

- *Type:* string

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPasswordInput"></a>

```csharp
public string AdministratorLoginPasswordInput { get; }
```

- *Type:* string

---

##### `AutoGrowEnabledInput`<sup>Optional</sup> <a name="AutoGrowEnabledInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabledInput"></a>

```csharp
public object AutoGrowEnabledInput { get; }
```

- *Type:* object

---

##### `BackupRetentionDaysInput`<sup>Optional</sup> <a name="BackupRetentionDaysInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDaysInput"></a>

```csharp
public double BackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createModeInput"></a>

```csharp
public string CreateModeInput { get; }
```

- *Type:* string

---

##### `CreationSourceServerIdInput`<sup>Optional</sup> <a name="CreationSourceServerIdInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerIdInput"></a>

```csharp
public string CreationSourceServerIdInput { get; }
```

- *Type:* string

---

##### `GeoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="GeoRedundantBackupEnabledInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabledInput"></a>

```csharp
public object GeoRedundantBackupEnabledInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identityInput"></a>

```csharp
public MysqlServerIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabledInput"></a>

```csharp
public object InfrastructureEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RestorePointInTimeInput`<sup>Optional</sup> <a name="RestorePointInTimeInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTimeInput"></a>

```csharp
public string RestorePointInTimeInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `SslEnforcementEnabledInput`<sup>Optional</sup> <a name="SslEnforcementEnabledInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabledInput"></a>

```csharp
public object SslEnforcementEnabledInput { get; }
```

- *Type:* object

---

##### `SslMinimalTlsVersionEnforcedInput`<sup>Optional</sup> <a name="SslMinimalTlsVersionEnforcedInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforcedInput"></a>

```csharp
public string SslMinimalTlsVersionEnforcedInput { get; }
```

- *Type:* string

---

##### `StorageMbInput`<sup>Optional</sup> <a name="StorageMbInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMbInput"></a>

```csharp
public double StorageMbInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThreatDetectionPolicyInput`<sup>Optional</sup> <a name="ThreatDetectionPolicyInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicyInput"></a>

```csharp
public MysqlServerThreatDetectionPolicy ThreatDetectionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLogin"></a>

```csharp
public string AdministratorLogin { get; }
```

- *Type:* string

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPassword"></a>

```csharp
public string AdministratorLoginPassword { get; }
```

- *Type:* string

---

##### `AutoGrowEnabled`<sup>Required</sup> <a name="AutoGrowEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabled"></a>

```csharp
public object AutoGrowEnabled { get; }
```

- *Type:* object

---

##### `BackupRetentionDays`<sup>Required</sup> <a name="BackupRetentionDays" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDays"></a>

```csharp
public double BackupRetentionDays { get; }
```

- *Type:* double

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createMode"></a>

```csharp
public string CreateMode { get; }
```

- *Type:* string

---

##### `CreationSourceServerId`<sup>Required</sup> <a name="CreationSourceServerId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerId"></a>

```csharp
public string CreationSourceServerId { get; }
```

- *Type:* string

---

##### `GeoRedundantBackupEnabled`<sup>Required</sup> <a name="GeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabled"></a>

```csharp
public object GeoRedundantBackupEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SslEnforcementEnabled`<sup>Required</sup> <a name="SslEnforcementEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabled"></a>

```csharp
public object SslEnforcementEnabled { get; }
```

- *Type:* object

---

##### `SslMinimalTlsVersionEnforced`<sup>Required</sup> <a name="SslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforced"></a>

```csharp
public string SslMinimalTlsVersionEnforced { get; }
```

- *Type:* string

---

##### `StorageMb`<sup>Required</sup> <a name="StorageMb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMb"></a>

```csharp
public double StorageMb { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlServerConfig <a name="MysqlServerConfig" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerConfig {
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
    string SkuName,
    object SslEnforcementEnabled,
    string Version,
    string AdministratorLogin = null,
    string AdministratorLoginPassword = null,
    object AutoGrowEnabled = null,
    double BackupRetentionDays = null,
    string CreateMode = null,
    string CreationSourceServerId = null,
    object GeoRedundantBackupEnabled = null,
    string Id = null,
    MysqlServerIdentity Identity = null,
    object InfrastructureEncryptionEnabled = null,
    object PublicNetworkAccessEnabled = null,
    string RestorePointInTime = null,
    string SslMinimalTlsVersionEnforced = null,
    double StorageMb = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MysqlServerThreatDetectionPolicy ThreatDetectionPolicy = null,
    MysqlServerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#location MysqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#name MysqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#resource_group_name MysqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#sku_name MysqlServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslEnforcementEnabled">SslEnforcementEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#ssl_enforcement_enabled MysqlServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#version MysqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLogin">AdministratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#administrator_login MysqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#administrator_login_password MysqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.autoGrowEnabled">AutoGrowEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#auto_grow_enabled MysqlServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#backup_retention_days MysqlServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.createMode">CreateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#create_mode MysqlServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.creationSourceServerId">CreationSourceServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#creation_source_server_id MysqlServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#geo_redundant_backup_enabled MysqlServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#id MysqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#infrastructure_encryption_enabled MysqlServer#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#public_network_access_enabled MysqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#restore_point_in_time MysqlServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslMinimalTlsVersionEnforced">SslMinimalTlsVersionEnforced</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#ssl_minimal_tls_version_enforced MysqlServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.storageMb">StorageMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#storage_mb MysqlServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#tags MysqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.threatDetectionPolicy">ThreatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#location MysqlServer#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#name MysqlServer#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#resource_group_name MysqlServer#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#sku_name MysqlServer#sku_name}.

---

##### `SslEnforcementEnabled`<sup>Required</sup> <a name="SslEnforcementEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslEnforcementEnabled"></a>

```csharp
public object SslEnforcementEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#ssl_enforcement_enabled MysqlServer#ssl_enforcement_enabled}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#version MysqlServer#version}.

---

##### `AdministratorLogin`<sup>Optional</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLogin"></a>

```csharp
public string AdministratorLogin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#administrator_login MysqlServer#administrator_login}.

---

##### `AdministratorLoginPassword`<sup>Optional</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLoginPassword"></a>

```csharp
public string AdministratorLoginPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#administrator_login_password MysqlServer#administrator_login_password}.

---

##### `AutoGrowEnabled`<sup>Optional</sup> <a name="AutoGrowEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.autoGrowEnabled"></a>

```csharp
public object AutoGrowEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#auto_grow_enabled MysqlServer#auto_grow_enabled}.

---

##### `BackupRetentionDays`<sup>Optional</sup> <a name="BackupRetentionDays" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.backupRetentionDays"></a>

```csharp
public double BackupRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#backup_retention_days MysqlServer#backup_retention_days}.

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.createMode"></a>

```csharp
public string CreateMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#create_mode MysqlServer#create_mode}.

---

##### `CreationSourceServerId`<sup>Optional</sup> <a name="CreationSourceServerId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.creationSourceServerId"></a>

```csharp
public string CreationSourceServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#creation_source_server_id MysqlServer#creation_source_server_id}.

---

##### `GeoRedundantBackupEnabled`<sup>Optional</sup> <a name="GeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.geoRedundantBackupEnabled"></a>

```csharp
public object GeoRedundantBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#geo_redundant_backup_enabled MysqlServer#geo_redundant_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#id MysqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.identity"></a>

```csharp
public MysqlServerIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#identity MysqlServer#identity}

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.infrastructureEncryptionEnabled"></a>

```csharp
public object InfrastructureEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#infrastructure_encryption_enabled MysqlServer#infrastructure_encryption_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#public_network_access_enabled MysqlServer#public_network_access_enabled}.

---

##### `RestorePointInTime`<sup>Optional</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#restore_point_in_time MysqlServer#restore_point_in_time}.

---

##### `SslMinimalTlsVersionEnforced`<sup>Optional</sup> <a name="SslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslMinimalTlsVersionEnforced"></a>

```csharp
public string SslMinimalTlsVersionEnforced { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#ssl_minimal_tls_version_enforced MysqlServer#ssl_minimal_tls_version_enforced}.

---

##### `StorageMb`<sup>Optional</sup> <a name="StorageMb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.storageMb"></a>

```csharp
public double StorageMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#storage_mb MysqlServer#storage_mb}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#tags MysqlServer#tags}.

---

##### `ThreatDetectionPolicy`<sup>Optional</sup> <a name="ThreatDetectionPolicy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.threatDetectionPolicy"></a>

```csharp
public MysqlServerThreatDetectionPolicy ThreatDetectionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#threat_detection_policy MysqlServer#threat_detection_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.timeouts"></a>

```csharp
public MysqlServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#timeouts MysqlServer#timeouts}

---

### MysqlServerIdentity <a name="MysqlServerIdentity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#type MysqlServer#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#type MysqlServer#type}.

---

### MysqlServerThreatDetectionPolicy <a name="MysqlServerThreatDetectionPolicy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerThreatDetectionPolicy {
    string[] DisabledAlerts = null,
    object EmailAccountAdmins = null,
    string[] EmailAddresses = null,
    object Enabled = null,
    double RetentionDays = null,
    string StorageAccountAccessKey = null,
    string StorageEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.disabledAlerts">DisabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#disabled_alerts MysqlServer#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAccountAdmins">EmailAccountAdmins</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#email_account_admins MysqlServer#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#email_addresses MysqlServer#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#enabled MysqlServer#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#retention_days MysqlServer#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#storage_account_access_key MysqlServer#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#storage_endpoint MysqlServer#storage_endpoint}. |

---

##### `DisabledAlerts`<sup>Optional</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.disabledAlerts"></a>

```csharp
public string[] DisabledAlerts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#disabled_alerts MysqlServer#disabled_alerts}.

---

##### `EmailAccountAdmins`<sup>Optional</sup> <a name="EmailAccountAdmins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAccountAdmins"></a>

```csharp
public object EmailAccountAdmins { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#email_account_admins MysqlServer#email_account_admins}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#email_addresses MysqlServer#email_addresses}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#enabled MysqlServer#enabled}.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#retention_days MysqlServer#retention_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#storage_account_access_key MysqlServer#storage_account_access_key}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#storage_endpoint MysqlServer#storage_endpoint}.

---

### MysqlServerTimeouts <a name="MysqlServerTimeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#create MysqlServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#delete MysqlServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#read MysqlServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#update MysqlServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#create MysqlServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#delete MysqlServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#read MysqlServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/mysql_server#update MysqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlServerIdentityOutputReference <a name="MysqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.internalValue"></a>

```csharp
public MysqlServerIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

---


### MysqlServerThreatDetectionPolicyOutputReference <a name="MysqlServerThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerThreatDetectionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts">ResetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">ResetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledAlerts` <a name="ResetDisabledAlerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```csharp
private void ResetDisabledAlerts()
```

##### `ResetEmailAccountAdmins` <a name="ResetEmailAccountAdmins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```csharp
private void ResetEmailAccountAdmins()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```csharp
private void ResetStorageAccountAccessKey()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```csharp
private void ResetStorageEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput">DisabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">EmailAccountAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts">DisabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins">EmailAccountAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledAlertsInput`<sup>Optional</sup> <a name="DisabledAlertsInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```csharp
public string[] DisabledAlertsInput { get; }
```

- *Type:* string[]

---

##### `EmailAccountAdminsInput`<sup>Optional</sup> <a name="EmailAccountAdminsInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```csharp
public object EmailAccountAdminsInput { get; }
```

- *Type:* object

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```csharp
public string StorageEndpointInput { get; }
```

- *Type:* string

---

##### `DisabledAlerts`<sup>Required</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```csharp
public string[] DisabledAlerts { get; }
```

- *Type:* string[]

---

##### `EmailAccountAdmins`<sup>Required</sup> <a name="EmailAccountAdmins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```csharp
public object EmailAccountAdmins { get; }
```

- *Type:* object

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.internalValue"></a>

```csharp
public MysqlServerThreatDetectionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

---


### MysqlServerTimeoutsOutputReference <a name="MysqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



