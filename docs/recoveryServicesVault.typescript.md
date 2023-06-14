# `azurerm_recovery_services_vault`

Refer to the Terraform Registory for docs: [`azurerm_recovery_services_vault`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault).

# `recoveryServicesVault` Submodule <a name="`recoveryServicesVault` Submodule" id="@cdktf/provider-azurerm.recoveryServicesVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryServicesVault <a name="RecoveryServicesVault" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault azurerm_recovery_services_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

new recoveryServicesVault.RecoveryServicesVault(scope: Construct, id: string, config: RecoveryServicesVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig">RecoveryServicesVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig">RecoveryServicesVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetClassicVmwareReplicationEnabled">resetClassicVmwareReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetCrossRegionRestoreEnabled">resetCrossRegionRestoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetImmutability">resetImmutability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetSoftDeleteEnabled">resetSoftDeleteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetStorageModeType">resetStorageModeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption"></a>

```typescript
public putEncryption(value: RecoveryServicesVaultEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity"></a>

```typescript
public putIdentity(value: RecoveryServicesVaultIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---

##### `putMonitoring` <a name="putMonitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring"></a>

```typescript
public putMonitoring(value: RecoveryServicesVaultMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts"></a>

```typescript
public putTimeouts(value: RecoveryServicesVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

---

##### `resetClassicVmwareReplicationEnabled` <a name="resetClassicVmwareReplicationEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetClassicVmwareReplicationEnabled"></a>

```typescript
public resetClassicVmwareReplicationEnabled(): void
```

##### `resetCrossRegionRestoreEnabled` <a name="resetCrossRegionRestoreEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetCrossRegionRestoreEnabled"></a>

```typescript
public resetCrossRegionRestoreEnabled(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetImmutability` <a name="resetImmutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetImmutability"></a>

```typescript
public resetImmutability(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetSoftDeleteEnabled` <a name="resetSoftDeleteEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetSoftDeleteEnabled"></a>

```typescript
public resetSoftDeleteEnabled(): void
```

##### `resetStorageModeType` <a name="resetStorageModeType" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetStorageModeType"></a>

```typescript
public resetStorageModeType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

recoveryServicesVault.RecoveryServicesVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

recoveryServicesVault.RecoveryServicesVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

recoveryServicesVault.RecoveryServicesVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference">RecoveryServicesVaultEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference">RecoveryServicesVaultIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference">RecoveryServicesVaultMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference">RecoveryServicesVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabledInput">classicVmwareReplicationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabledInput">crossRegionRestoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutabilityInput">immutabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoringInput">monitoringInput</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabledInput">softDeleteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeTypeInput">storageModeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabled">classicVmwareReplicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabled">crossRegionRestoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutability">immutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabled">softDeleteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeType">storageModeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryption"></a>

```typescript
public readonly encryption: RecoveryServicesVaultEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference">RecoveryServicesVaultEncryptionOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identity"></a>

```typescript
public readonly identity: RecoveryServicesVaultIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference">RecoveryServicesVaultIdentityOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoring"></a>

```typescript
public readonly monitoring: RecoveryServicesVaultMonitoringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference">RecoveryServicesVaultMonitoringOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryServicesVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference">RecoveryServicesVaultTimeoutsOutputReference</a>

---

##### `classicVmwareReplicationEnabledInput`<sup>Optional</sup> <a name="classicVmwareReplicationEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabledInput"></a>

```typescript
public readonly classicVmwareReplicationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crossRegionRestoreEnabledInput`<sup>Optional</sup> <a name="crossRegionRestoreEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabledInput"></a>

```typescript
public readonly crossRegionRestoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: RecoveryServicesVaultEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identityInput"></a>

```typescript
public readonly identityInput: RecoveryServicesVaultIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `immutabilityInput`<sup>Optional</sup> <a name="immutabilityInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutabilityInput"></a>

```typescript
public readonly immutabilityInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: RecoveryServicesVaultMonitoring;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `softDeleteEnabledInput`<sup>Optional</sup> <a name="softDeleteEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabledInput"></a>

```typescript
public readonly softDeleteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageModeTypeInput`<sup>Optional</sup> <a name="storageModeTypeInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeTypeInput"></a>

```typescript
public readonly storageModeTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RecoveryServicesVaultTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a> | cdktf.IResolvable

---

##### `classicVmwareReplicationEnabled`<sup>Required</sup> <a name="classicVmwareReplicationEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabled"></a>

```typescript
public readonly classicVmwareReplicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crossRegionRestoreEnabled`<sup>Required</sup> <a name="crossRegionRestoreEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabled"></a>

```typescript
public readonly crossRegionRestoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `immutability`<sup>Required</sup> <a name="immutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutability"></a>

```typescript
public readonly immutability: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `softDeleteEnabled`<sup>Required</sup> <a name="softDeleteEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabled"></a>

```typescript
public readonly softDeleteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageModeType`<sup>Required</sup> <a name="storageModeType" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeType"></a>

```typescript
public readonly storageModeType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryServicesVaultConfig <a name="RecoveryServicesVaultConfig" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

const recoveryServicesVaultConfig: recoveryServicesVault.RecoveryServicesVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.classicVmwareReplicationEnabled">classicVmwareReplicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.crossRegionRestoreEnabled">crossRegionRestoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.immutability">immutability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.softDeleteEnabled">softDeleteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.storageModeType">storageModeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}.

---

##### `classicVmwareReplicationEnabled`<sup>Optional</sup> <a name="classicVmwareReplicationEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.classicVmwareReplicationEnabled"></a>

```typescript
public readonly classicVmwareReplicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}.

---

##### `crossRegionRestoreEnabled`<sup>Optional</sup> <a name="crossRegionRestoreEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.crossRegionRestoreEnabled"></a>

```typescript
public readonly crossRegionRestoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.encryption"></a>

```typescript
public readonly encryption: RecoveryServicesVaultEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#encryption RecoveryServicesVault#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.identity"></a>

```typescript
public readonly identity: RecoveryServicesVaultIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#identity RecoveryServicesVault#identity}

---

##### `immutability`<sup>Optional</sup> <a name="immutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.immutability"></a>

```typescript
public readonly immutability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.monitoring"></a>

```typescript
public readonly monitoring: RecoveryServicesVaultMonitoring;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#monitoring RecoveryServicesVault#monitoring}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}.

---

##### `softDeleteEnabled`<sup>Optional</sup> <a name="softDeleteEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.softDeleteEnabled"></a>

```typescript
public readonly softDeleteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}.

---

##### `storageModeType`<sup>Optional</sup> <a name="storageModeType" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.storageModeType"></a>

```typescript
public readonly storageModeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryServicesVaultTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#timeouts RecoveryServicesVault#timeouts}

---

### RecoveryServicesVaultEncryption <a name="RecoveryServicesVaultEncryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

const recoveryServicesVaultEncryption: recoveryServicesVault.RecoveryServicesVaultEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.useSystemAssignedIdentity">useSystemAssignedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}. |

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}.

---

##### `useSystemAssignedIdentity`<sup>Optional</sup> <a name="useSystemAssignedIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.useSystemAssignedIdentity"></a>

```typescript
public readonly useSystemAssignedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}.

---

### RecoveryServicesVaultIdentity <a name="RecoveryServicesVaultIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

const recoveryServicesVaultIdentity: recoveryServicesVault.RecoveryServicesVaultIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}.

---

### RecoveryServicesVaultMonitoring <a name="RecoveryServicesVaultMonitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

const recoveryServicesVaultMonitoring: recoveryServicesVault.RecoveryServicesVaultMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllJobFailuresEnabled">alertsForAllJobFailuresEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForCriticalOperationFailuresEnabled">alertsForCriticalOperationFailuresEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}. |

---

##### `alertsForAllJobFailuresEnabled`<sup>Optional</sup> <a name="alertsForAllJobFailuresEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllJobFailuresEnabled"></a>

```typescript
public readonly alertsForAllJobFailuresEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}.

---

##### `alertsForCriticalOperationFailuresEnabled`<sup>Optional</sup> <a name="alertsForCriticalOperationFailuresEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForCriticalOperationFailuresEnabled"></a>

```typescript
public readonly alertsForCriticalOperationFailuresEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}.

---

### RecoveryServicesVaultTimeouts <a name="RecoveryServicesVaultTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

const recoveryServicesVaultTimeouts: recoveryServicesVault.RecoveryServicesVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryServicesVaultEncryptionOutputReference <a name="RecoveryServicesVaultEncryptionOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

new recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUseSystemAssignedIdentity">resetUseSystemAssignedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

##### `resetUseSystemAssignedIdentity` <a name="resetUseSystemAssignedIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUseSystemAssignedIdentity"></a>

```typescript
public resetUseSystemAssignedIdentity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentityInput">useSystemAssignedIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentity">useSystemAssignedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabledInput"></a>

```typescript
public readonly infrastructureEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `useSystemAssignedIdentityInput`<sup>Optional</sup> <a name="useSystemAssignedIdentityInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentityInput"></a>

```typescript
public readonly useSystemAssignedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `useSystemAssignedIdentity`<sup>Required</sup> <a name="useSystemAssignedIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentity"></a>

```typescript
public readonly useSystemAssignedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecoveryServicesVaultEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---


### RecoveryServicesVaultIdentityOutputReference <a name="RecoveryServicesVaultIdentityOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

new recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecoveryServicesVaultIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---


### RecoveryServicesVaultMonitoringOutputReference <a name="RecoveryServicesVaultMonitoringOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

new recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllJobFailuresEnabled">resetAlertsForAllJobFailuresEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForCriticalOperationFailuresEnabled">resetAlertsForCriticalOperationFailuresEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertsForAllJobFailuresEnabled` <a name="resetAlertsForAllJobFailuresEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllJobFailuresEnabled"></a>

```typescript
public resetAlertsForAllJobFailuresEnabled(): void
```

##### `resetAlertsForCriticalOperationFailuresEnabled` <a name="resetAlertsForCriticalOperationFailuresEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForCriticalOperationFailuresEnabled"></a>

```typescript
public resetAlertsForCriticalOperationFailuresEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabledInput">alertsForAllJobFailuresEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabledInput">alertsForCriticalOperationFailuresEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabled">alertsForAllJobFailuresEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabled">alertsForCriticalOperationFailuresEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertsForAllJobFailuresEnabledInput`<sup>Optional</sup> <a name="alertsForAllJobFailuresEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabledInput"></a>

```typescript
public readonly alertsForAllJobFailuresEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alertsForCriticalOperationFailuresEnabledInput`<sup>Optional</sup> <a name="alertsForCriticalOperationFailuresEnabledInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabledInput"></a>

```typescript
public readonly alertsForCriticalOperationFailuresEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alertsForAllJobFailuresEnabled`<sup>Required</sup> <a name="alertsForAllJobFailuresEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabled"></a>

```typescript
public readonly alertsForAllJobFailuresEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alertsForCriticalOperationFailuresEnabled`<sup>Required</sup> <a name="alertsForCriticalOperationFailuresEnabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabled"></a>

```typescript
public readonly alertsForCriticalOperationFailuresEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecoveryServicesVaultMonitoring;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---


### RecoveryServicesVaultTimeoutsOutputReference <a name="RecoveryServicesVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { recoveryServicesVault } from '@cdktf/provider-azurerm'

new recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecoveryServicesVaultTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a> | cdktf.IResolvable

---



