# `azurerm_mariadb_server`

Refer to the Terraform Registory for docs: [`azurerm_mariadb_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server).

# `mariadbServer` Submodule <a name="`mariadbServer` Submodule" id="@cdktf/provider-azurerm.mariadbServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MariadbServer <a name="MariadbServer" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server azurerm_mariadb_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

new mariadbServer.MariadbServer(scope: Construct, id: string, config: MariadbServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig">MariadbServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig">MariadbServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLogin">resetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLoginPassword">resetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAutoGrowEnabled">resetAutoGrowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetBackupRetentionDays">resetBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreationSourceServerId">resetCreationSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetGeoRedundantBackupEnabled">resetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetRestorePointInTime">resetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetSslMinimalTlsVersionEnforced">resetSslMinimalTlsVersionEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetStorageMb">resetStorageMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.putTimeouts"></a>

```typescript
public putTimeouts(value: MariadbServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a>

---

##### `resetAdministratorLogin` <a name="resetAdministratorLogin" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLogin"></a>

```typescript
public resetAdministratorLogin(): void
```

##### `resetAdministratorLoginPassword` <a name="resetAdministratorLoginPassword" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLoginPassword"></a>

```typescript
public resetAdministratorLoginPassword(): void
```

##### `resetAutoGrowEnabled` <a name="resetAutoGrowEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAutoGrowEnabled"></a>

```typescript
public resetAutoGrowEnabled(): void
```

##### `resetBackupRetentionDays` <a name="resetBackupRetentionDays" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetBackupRetentionDays"></a>

```typescript
public resetBackupRetentionDays(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetCreationSourceServerId` <a name="resetCreationSourceServerId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreationSourceServerId"></a>

```typescript
public resetCreationSourceServerId(): void
```

##### `resetGeoRedundantBackupEnabled` <a name="resetGeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetGeoRedundantBackupEnabled"></a>

```typescript
public resetGeoRedundantBackupEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetRestorePointInTime` <a name="resetRestorePointInTime" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetRestorePointInTime"></a>

```typescript
public resetRestorePointInTime(): void
```

##### `resetSslMinimalTlsVersionEnforced` <a name="resetSslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetSslMinimalTlsVersionEnforced"></a>

```typescript
public resetSslMinimalTlsVersionEnforced(): void
```

##### `resetStorageMb` <a name="resetStorageMb" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetStorageMb"></a>

```typescript
public resetStorageMb(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isConstruct"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

mariadbServer.MariadbServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformElement"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

mariadbServer.MariadbServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformResource"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

mariadbServer.MariadbServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference">MariadbServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabledInput">autoGrowEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDaysInput">backupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerIdInput">creationSourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabledInput">geoRedundantBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTimeInput">restorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabledInput">sslEnforcementEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforcedInput">sslMinimalTlsVersionEnforcedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMbInput">storageMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerId">creationSourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabled">sslEnforcementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforced">sslMinimalTlsVersionEnforced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMb">storageMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeouts"></a>

```typescript
public readonly timeouts: MariadbServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference">MariadbServerTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `autoGrowEnabledInput`<sup>Optional</sup> <a name="autoGrowEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabledInput"></a>

```typescript
public readonly autoGrowEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionDaysInput`<sup>Optional</sup> <a name="backupRetentionDaysInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDaysInput"></a>

```typescript
public readonly backupRetentionDaysInput: number;
```

- *Type:* number

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `creationSourceServerIdInput`<sup>Optional</sup> <a name="creationSourceServerIdInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerIdInput"></a>

```typescript
public readonly creationSourceServerIdInput: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="geoRedundantBackupEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabledInput"></a>

```typescript
public readonly geoRedundantBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restorePointInTimeInput`<sup>Optional</sup> <a name="restorePointInTimeInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTimeInput"></a>

```typescript
public readonly restorePointInTimeInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `sslEnforcementEnabledInput`<sup>Optional</sup> <a name="sslEnforcementEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabledInput"></a>

```typescript
public readonly sslEnforcementEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslMinimalTlsVersionEnforcedInput`<sup>Optional</sup> <a name="sslMinimalTlsVersionEnforcedInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforcedInput"></a>

```typescript
public readonly sslMinimalTlsVersionEnforcedInput: string;
```

- *Type:* string

---

##### `storageMbInput`<sup>Optional</sup> <a name="storageMbInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMbInput"></a>

```typescript
public readonly storageMbInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MariadbServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `autoGrowEnabled`<sup>Required</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `creationSourceServerId`<sup>Required</sup> <a name="creationSourceServerId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerId"></a>

```typescript
public readonly creationSourceServerId: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `sslEnforcementEnabled`<sup>Required</sup> <a name="sslEnforcementEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabled"></a>

```typescript
public readonly sslEnforcementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslMinimalTlsVersionEnforced`<sup>Required</sup> <a name="sslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforced"></a>

```typescript
public readonly sslMinimalTlsVersionEnforced: string;
```

- *Type:* string

---

##### `storageMb`<sup>Required</sup> <a name="storageMb" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMb"></a>

```typescript
public readonly storageMb: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MariadbServerConfig <a name="MariadbServerConfig" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.Initializer"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

const mariadbServerConfig: mariadbServer.MariadbServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#location MariadbServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#name MariadbServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#resource_group_name MariadbServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#sku_name MariadbServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslEnforcementEnabled">sslEnforcementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#ssl_enforcement_enabled MariadbServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#version MariadbServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#administrator_login MariadbServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#administrator_login_password MariadbServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#auto_grow_enabled MariadbServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#backup_retention_days MariadbServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#create_mode MariadbServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.creationSourceServerId">creationSourceServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#creation_source_server_id MariadbServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#geo_redundant_backup_enabled MariadbServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#id MariadbServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#public_network_access_enabled MariadbServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#restore_point_in_time MariadbServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslMinimalTlsVersionEnforced">sslMinimalTlsVersionEnforced</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#ssl_minimal_tls_version_enforced MariadbServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.storageMb">storageMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#storage_mb MariadbServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#tags MariadbServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#location MariadbServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#name MariadbServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#resource_group_name MariadbServer#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#sku_name MariadbServer#sku_name}.

---

##### `sslEnforcementEnabled`<sup>Required</sup> <a name="sslEnforcementEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslEnforcementEnabled"></a>

```typescript
public readonly sslEnforcementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#ssl_enforcement_enabled MariadbServer#ssl_enforcement_enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#version MariadbServer#version}.

---

##### `administratorLogin`<sup>Optional</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#administrator_login MariadbServer#administrator_login}.

---

##### `administratorLoginPassword`<sup>Optional</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#administrator_login_password MariadbServer#administrator_login_password}.

---

##### `autoGrowEnabled`<sup>Optional</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#auto_grow_enabled MariadbServer#auto_grow_enabled}.

---

##### `backupRetentionDays`<sup>Optional</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#backup_retention_days MariadbServer#backup_retention_days}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#create_mode MariadbServer#create_mode}.

---

##### `creationSourceServerId`<sup>Optional</sup> <a name="creationSourceServerId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.creationSourceServerId"></a>

```typescript
public readonly creationSourceServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#creation_source_server_id MariadbServer#creation_source_server_id}.

---

##### `geoRedundantBackupEnabled`<sup>Optional</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#geo_redundant_backup_enabled MariadbServer#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#id MariadbServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#public_network_access_enabled MariadbServer#public_network_access_enabled}.

---

##### `restorePointInTime`<sup>Optional</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#restore_point_in_time MariadbServer#restore_point_in_time}.

---

##### `sslMinimalTlsVersionEnforced`<sup>Optional</sup> <a name="sslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslMinimalTlsVersionEnforced"></a>

```typescript
public readonly sslMinimalTlsVersionEnforced: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#ssl_minimal_tls_version_enforced MariadbServer#ssl_minimal_tls_version_enforced}.

---

##### `storageMb`<sup>Optional</sup> <a name="storageMb" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.storageMb"></a>

```typescript
public readonly storageMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#storage_mb MariadbServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#tags MariadbServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MariadbServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#timeouts MariadbServer#timeouts}

---

### MariadbServerTimeouts <a name="MariadbServerTimeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.Initializer"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

const mariadbServerTimeouts: mariadbServer.MariadbServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#create MariadbServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#delete MariadbServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#read MariadbServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#update MariadbServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#create MariadbServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#delete MariadbServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#read MariadbServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/mariadb_server#update MariadbServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MariadbServerTimeoutsOutputReference <a name="MariadbServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { mariadbServer } from '@cdktf/provider-azurerm'

new mariadbServer.MariadbServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MariadbServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a>

---



