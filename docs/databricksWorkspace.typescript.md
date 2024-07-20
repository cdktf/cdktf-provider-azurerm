# `databricksWorkspace` Submodule <a name="`databricksWorkspace` Submodule" id="@cdktf/provider-azurerm.databricksWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspace <a name="DatabricksWorkspace" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace azurerm_databricks_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspace(scope: Construct, id: string, config: DatabricksWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig">DatabricksWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig">DatabricksWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters">putCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetAccessConnectorId">resetAccessConnectorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters">resetCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetDefaultStorageFirewallEnabled">resetDefaultStorageFirewallEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId">resetLoadBalancerBackendAddressPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultId">resetManagedDiskCmkKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId">resetManagedDiskCmkKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled">resetManagedDiskCmkRotationToLatestVersionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultId">resetManagedServicesCmkKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId">resetManagedServicesCmkKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired">resetNetworkSecurityGroupRulesRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomParameters` <a name="putCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters"></a>

```typescript
public putCustomParameters(value: DatabricksWorkspaceCustomParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabricksWorkspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---

##### `resetAccessConnectorId` <a name="resetAccessConnectorId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetAccessConnectorId"></a>

```typescript
public resetAccessConnectorId(): void
```

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled"></a>

```typescript
public resetCustomerManagedKeyEnabled(): void
```

##### `resetCustomParameters` <a name="resetCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters"></a>

```typescript
public resetCustomParameters(): void
```

##### `resetDefaultStorageFirewallEnabled` <a name="resetDefaultStorageFirewallEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetDefaultStorageFirewallEnabled"></a>

```typescript
public resetDefaultStorageFirewallEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled"></a>

```typescript
public resetInfrastructureEncryptionEnabled(): void
```

##### `resetLoadBalancerBackendAddressPoolId` <a name="resetLoadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId"></a>

```typescript
public resetLoadBalancerBackendAddressPoolId(): void
```

##### `resetManagedDiskCmkKeyVaultId` <a name="resetManagedDiskCmkKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultId"></a>

```typescript
public resetManagedDiskCmkKeyVaultId(): void
```

##### `resetManagedDiskCmkKeyVaultKeyId` <a name="resetManagedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId"></a>

```typescript
public resetManagedDiskCmkKeyVaultKeyId(): void
```

##### `resetManagedDiskCmkRotationToLatestVersionEnabled` <a name="resetManagedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled"></a>

```typescript
public resetManagedDiskCmkRotationToLatestVersionEnabled(): void
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName"></a>

```typescript
public resetManagedResourceGroupName(): void
```

##### `resetManagedServicesCmkKeyVaultId` <a name="resetManagedServicesCmkKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultId"></a>

```typescript
public resetManagedServicesCmkKeyVaultId(): void
```

##### `resetManagedServicesCmkKeyVaultKeyId` <a name="resetManagedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId"></a>

```typescript
public resetManagedServicesCmkKeyVaultKeyId(): void
```

##### `resetNetworkSecurityGroupRulesRequired` <a name="resetNetworkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired"></a>

```typescript
public resetNetworkSecurityGroupRulesRequired(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

databricksWorkspace.DatabricksWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

databricksWorkspace.DatabricksWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

databricksWorkspace.DatabricksWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

databricksWorkspace.DatabricksWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters">customParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity">managedDiskIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId">managedResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity">storageAccountIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorIdInput">accessConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput">customParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabledInput">defaultStorageFirewallEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput">loadBalancerBackendAddressPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultIdInput">managedDiskCmkKeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput">managedDiskCmkKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput">managedDiskCmkRotationToLatestVersionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultIdInput">managedServicesCmkKeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput">managedServicesCmkKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput">networkSecurityGroupRulesRequiredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorId">accessConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabled">defaultStorageFirewallEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId">loadBalancerBackendAddressPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultId">managedDiskCmkKeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId">managedDiskCmkKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled">managedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultId">managedServicesCmkKeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId">managedServicesCmkKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired">networkSecurityGroupRulesRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customParameters`<sup>Required</sup> <a name="customParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters"></a>

```typescript
public readonly customParameters: DatabricksWorkspaceCustomParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a>

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

---

##### `managedDiskIdentity`<sup>Required</sup> <a name="managedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity"></a>

```typescript
public readonly managedDiskIdentity: DatabricksWorkspaceManagedDiskIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a>

---

##### `managedResourceGroupId`<sup>Required</sup> <a name="managedResourceGroupId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId"></a>

```typescript
public readonly managedResourceGroupId: string;
```

- *Type:* string

---

##### `storageAccountIdentity`<sup>Required</sup> <a name="storageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity"></a>

```typescript
public readonly storageAccountIdentity: DatabricksWorkspaceStorageAccountIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts"></a>

```typescript
public readonly timeouts: DatabricksWorkspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---

##### `accessConnectorIdInput`<sup>Optional</sup> <a name="accessConnectorIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorIdInput"></a>

```typescript
public readonly accessConnectorIdInput: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput"></a>

```typescript
public readonly customerManagedKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customParametersInput`<sup>Optional</sup> <a name="customParametersInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput"></a>

```typescript
public readonly customParametersInput: DatabricksWorkspaceCustomParameters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `defaultStorageFirewallEnabledInput`<sup>Optional</sup> <a name="defaultStorageFirewallEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabledInput"></a>

```typescript
public readonly defaultStorageFirewallEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput"></a>

```typescript
public readonly infrastructureEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerBackendAddressPoolIdInput`<sup>Optional</sup> <a name="loadBalancerBackendAddressPoolIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput"></a>

```typescript
public readonly loadBalancerBackendAddressPoolIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedDiskCmkKeyVaultIdInput`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultIdInput"></a>

```typescript
public readonly managedDiskCmkKeyVaultIdInput: string;
```

- *Type:* string

---

##### `managedDiskCmkKeyVaultKeyIdInput`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput"></a>

```typescript
public readonly managedDiskCmkKeyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `managedDiskCmkRotationToLatestVersionEnabledInput`<sup>Optional</sup> <a name="managedDiskCmkRotationToLatestVersionEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput"></a>

```typescript
public readonly managedDiskCmkRotationToLatestVersionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput"></a>

```typescript
public readonly managedResourceGroupNameInput: string;
```

- *Type:* string

---

##### `managedServicesCmkKeyVaultIdInput`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultIdInput"></a>

```typescript
public readonly managedServicesCmkKeyVaultIdInput: string;
```

- *Type:* string

---

##### `managedServicesCmkKeyVaultKeyIdInput`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput"></a>

```typescript
public readonly managedServicesCmkKeyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupRulesRequiredInput`<sup>Optional</sup> <a name="networkSecurityGroupRulesRequiredInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput"></a>

```typescript
public readonly networkSecurityGroupRulesRequiredInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabricksWorkspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---

##### `accessConnectorId`<sup>Required</sup> <a name="accessConnectorId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorId"></a>

```typescript
public readonly accessConnectorId: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultStorageFirewallEnabled`<sup>Required</sup> <a name="defaultStorageFirewallEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabled"></a>

```typescript
public readonly defaultStorageFirewallEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerBackendAddressPoolId`<sup>Required</sup> <a name="loadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId"></a>

```typescript
public readonly loadBalancerBackendAddressPoolId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedDiskCmkKeyVaultId`<sup>Required</sup> <a name="managedDiskCmkKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultId"></a>

```typescript
public readonly managedDiskCmkKeyVaultId: string;
```

- *Type:* string

---

##### `managedDiskCmkKeyVaultKeyId`<sup>Required</sup> <a name="managedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId"></a>

```typescript
public readonly managedDiskCmkKeyVaultKeyId: string;
```

- *Type:* string

---

##### `managedDiskCmkRotationToLatestVersionEnabled`<sup>Required</sup> <a name="managedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```typescript
public readonly managedDiskCmkRotationToLatestVersionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

---

##### `managedServicesCmkKeyVaultId`<sup>Required</sup> <a name="managedServicesCmkKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultId"></a>

```typescript
public readonly managedServicesCmkKeyVaultId: string;
```

- *Type:* string

---

##### `managedServicesCmkKeyVaultKeyId`<sup>Required</sup> <a name="managedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId"></a>

```typescript
public readonly managedServicesCmkKeyVaultKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkSecurityGroupRulesRequired`<sup>Required</sup> <a name="networkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired"></a>

```typescript
public readonly networkSecurityGroupRulesRequired: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceConfig <a name="DatabricksWorkspaceConfig" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

const databricksWorkspaceConfig: databricksWorkspace.DatabricksWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.accessConnectorId">accessConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters">customParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | custom_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.defaultStorageFirewallEnabled">defaultStorageFirewallEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId">loadBalancerBackendAddressPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultId">managedDiskCmkKeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId">managedDiskCmkKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled">managedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultId">managedServicesCmkKeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId">managedServicesCmkKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired">networkSecurityGroupRulesRequired</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}.

---

##### `accessConnectorId`<sup>Optional</sup> <a name="accessConnectorId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.accessConnectorId"></a>

```typescript
public readonly accessConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}.

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}.

---

##### `customParameters`<sup>Optional</sup> <a name="customParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters"></a>

```typescript
public readonly customParameters: DatabricksWorkspaceCustomParameters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

custom_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}

---

##### `defaultStorageFirewallEnabled`<sup>Optional</sup> <a name="defaultStorageFirewallEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.defaultStorageFirewallEnabled"></a>

```typescript
public readonly defaultStorageFirewallEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}.

---

##### `loadBalancerBackendAddressPoolId`<sup>Optional</sup> <a name="loadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId"></a>

```typescript
public readonly loadBalancerBackendAddressPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}.

---

##### `managedDiskCmkKeyVaultId`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultId"></a>

```typescript
public readonly managedDiskCmkKeyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}.

---

##### `managedDiskCmkKeyVaultKeyId`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId"></a>

```typescript
public readonly managedDiskCmkKeyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}.

---

##### `managedDiskCmkRotationToLatestVersionEnabled`<sup>Optional</sup> <a name="managedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```typescript
public readonly managedDiskCmkRotationToLatestVersionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}.

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}.

---

##### `managedServicesCmkKeyVaultId`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultId"></a>

```typescript
public readonly managedServicesCmkKeyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}.

---

##### `managedServicesCmkKeyVaultKeyId`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId"></a>

```typescript
public readonly managedServicesCmkKeyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}.

---

##### `networkSecurityGroupRulesRequired`<sup>Optional</sup> <a name="networkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired"></a>

```typescript
public readonly networkSecurityGroupRulesRequired: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabricksWorkspaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}

---

### DatabricksWorkspaceCustomParameters <a name="DatabricksWorkspaceCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

const databricksWorkspaceCustomParameters: databricksWorkspace.DatabricksWorkspaceCustomParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName">natGatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp">noPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName">privateSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId">privateSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName">publicIpName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName">publicSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId">publicSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName">storageAccountSkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix">vnetAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}. |

---

##### `machineLearningWorkspaceId`<sup>Optional</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId"></a>

```typescript
public readonly machineLearningWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}.

---

##### `natGatewayName`<sup>Optional</sup> <a name="natGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName"></a>

```typescript
public readonly natGatewayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}.

---

##### `noPublicIp`<sup>Optional</sup> <a name="noPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp"></a>

```typescript
public readonly noPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}.

---

##### `privateSubnetName`<sup>Optional</sup> <a name="privateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName"></a>

```typescript
public readonly privateSubnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}.

---

##### `privateSubnetNetworkSecurityGroupAssociationId`<sup>Optional</sup> <a name="privateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```typescript
public readonly privateSubnetNetworkSecurityGroupAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}.

---

##### `publicIpName`<sup>Optional</sup> <a name="publicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName"></a>

```typescript
public readonly publicIpName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}.

---

##### `publicSubnetName`<sup>Optional</sup> <a name="publicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName"></a>

```typescript
public readonly publicSubnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}.

---

##### `publicSubnetNetworkSecurityGroupAssociationId`<sup>Optional</sup> <a name="publicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```typescript
public readonly publicSubnetNetworkSecurityGroupAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}.

---

##### `storageAccountSkuName`<sup>Optional</sup> <a name="storageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName"></a>

```typescript
public readonly storageAccountSkuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}.

---

##### `vnetAddressPrefix`<sup>Optional</sup> <a name="vnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix"></a>

```typescript
public readonly vnetAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}.

---

### DatabricksWorkspaceManagedDiskIdentity <a name="DatabricksWorkspaceManagedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

const databricksWorkspaceManagedDiskIdentity: databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity = { ... }
```


### DatabricksWorkspaceStorageAccountIdentity <a name="DatabricksWorkspaceStorageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

const databricksWorkspaceStorageAccountIdentity: databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity = { ... }
```


### DatabricksWorkspaceTimeouts <a name="DatabricksWorkspaceTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

const databricksWorkspaceTimeouts: databricksWorkspace.DatabricksWorkspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceCustomParametersOutputReference <a name="DatabricksWorkspaceCustomParametersOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId">resetMachineLearningWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName">resetNatGatewayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp">resetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName">resetPrivateSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId">resetPrivateSubnetNetworkSecurityGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName">resetPublicIpName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName">resetPublicSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId">resetPublicSubnetNetworkSecurityGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName">resetStorageAccountSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix">resetVnetAddressPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineLearningWorkspaceId` <a name="resetMachineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId"></a>

```typescript
public resetMachineLearningWorkspaceId(): void
```

##### `resetNatGatewayName` <a name="resetNatGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName"></a>

```typescript
public resetNatGatewayName(): void
```

##### `resetNoPublicIp` <a name="resetNoPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp"></a>

```typescript
public resetNoPublicIp(): void
```

##### `resetPrivateSubnetName` <a name="resetPrivateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName"></a>

```typescript
public resetPrivateSubnetName(): void
```

##### `resetPrivateSubnetNetworkSecurityGroupAssociationId` <a name="resetPrivateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId"></a>

```typescript
public resetPrivateSubnetNetworkSecurityGroupAssociationId(): void
```

##### `resetPublicIpName` <a name="resetPublicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName"></a>

```typescript
public resetPublicIpName(): void
```

##### `resetPublicSubnetName` <a name="resetPublicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName"></a>

```typescript
public resetPublicSubnetName(): void
```

##### `resetPublicSubnetNetworkSecurityGroupAssociationId` <a name="resetPublicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId"></a>

```typescript
public resetPublicSubnetNetworkSecurityGroupAssociationId(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```

##### `resetStorageAccountSkuName` <a name="resetStorageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName"></a>

```typescript
public resetStorageAccountSkuName(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

##### `resetVnetAddressPrefix` <a name="resetVnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix"></a>

```typescript
public resetVnetAddressPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput">machineLearningWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput">natGatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput">noPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput">privateSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput">privateSubnetNetworkSecurityGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput">publicIpNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput">publicSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput">publicSubnetNetworkSecurityGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput">storageAccountSkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput">vnetAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName">natGatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp">noPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName">privateSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId">privateSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName">publicIpName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName">publicSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId">publicSubnetNetworkSecurityGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName">storageAccountSkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix">vnetAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="machineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput"></a>

```typescript
public readonly machineLearningWorkspaceIdInput: string;
```

- *Type:* string

---

##### `natGatewayNameInput`<sup>Optional</sup> <a name="natGatewayNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput"></a>

```typescript
public readonly natGatewayNameInput: string;
```

- *Type:* string

---

##### `noPublicIpInput`<sup>Optional</sup> <a name="noPublicIpInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput"></a>

```typescript
public readonly noPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateSubnetNameInput`<sup>Optional</sup> <a name="privateSubnetNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput"></a>

```typescript
public readonly privateSubnetNameInput: string;
```

- *Type:* string

---

##### `privateSubnetNetworkSecurityGroupAssociationIdInput`<sup>Optional</sup> <a name="privateSubnetNetworkSecurityGroupAssociationIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput"></a>

```typescript
public readonly privateSubnetNetworkSecurityGroupAssociationIdInput: string;
```

- *Type:* string

---

##### `publicIpNameInput`<sup>Optional</sup> <a name="publicIpNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput"></a>

```typescript
public readonly publicIpNameInput: string;
```

- *Type:* string

---

##### `publicSubnetNameInput`<sup>Optional</sup> <a name="publicSubnetNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput"></a>

```typescript
public readonly publicSubnetNameInput: string;
```

- *Type:* string

---

##### `publicSubnetNetworkSecurityGroupAssociationIdInput`<sup>Optional</sup> <a name="publicSubnetNetworkSecurityGroupAssociationIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput"></a>

```typescript
public readonly publicSubnetNetworkSecurityGroupAssociationIdInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `storageAccountSkuNameInput`<sup>Optional</sup> <a name="storageAccountSkuNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput"></a>

```typescript
public readonly storageAccountSkuNameInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `vnetAddressPrefixInput`<sup>Optional</sup> <a name="vnetAddressPrefixInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput"></a>

```typescript
public readonly vnetAddressPrefixInput: string;
```

- *Type:* string

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId"></a>

```typescript
public readonly machineLearningWorkspaceId: string;
```

- *Type:* string

---

##### `natGatewayName`<sup>Required</sup> <a name="natGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName"></a>

```typescript
public readonly natGatewayName: string;
```

- *Type:* string

---

##### `noPublicIp`<sup>Required</sup> <a name="noPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp"></a>

```typescript
public readonly noPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateSubnetName`<sup>Required</sup> <a name="privateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName"></a>

```typescript
public readonly privateSubnetName: string;
```

- *Type:* string

---

##### `privateSubnetNetworkSecurityGroupAssociationId`<sup>Required</sup> <a name="privateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```typescript
public readonly privateSubnetNetworkSecurityGroupAssociationId: string;
```

- *Type:* string

---

##### `publicIpName`<sup>Required</sup> <a name="publicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName"></a>

```typescript
public readonly publicIpName: string;
```

- *Type:* string

---

##### `publicSubnetName`<sup>Required</sup> <a name="publicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName"></a>

```typescript
public readonly publicSubnetName: string;
```

- *Type:* string

---

##### `publicSubnetNetworkSecurityGroupAssociationId`<sup>Required</sup> <a name="publicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```typescript
public readonly publicSubnetNetworkSecurityGroupAssociationId: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageAccountSkuName`<sup>Required</sup> <a name="storageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName"></a>

```typescript
public readonly storageAccountSkuName: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `vnetAddressPrefix`<sup>Required</sup> <a name="vnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix"></a>

```typescript
public readonly vnetAddressPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabricksWorkspaceCustomParameters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---


### DatabricksWorkspaceManagedDiskIdentityList <a name="DatabricksWorkspaceManagedDiskIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get"></a>

```typescript
public get(index: number): DatabricksWorkspaceManagedDiskIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabricksWorkspaceManagedDiskIdentityOutputReference <a name="DatabricksWorkspaceManagedDiskIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabricksWorkspaceManagedDiskIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a>

---


### DatabricksWorkspaceStorageAccountIdentityList <a name="DatabricksWorkspaceStorageAccountIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get"></a>

```typescript
public get(index: number): DatabricksWorkspaceStorageAccountIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabricksWorkspaceStorageAccountIdentityOutputReference <a name="DatabricksWorkspaceStorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabricksWorkspaceStorageAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a>

---


### DatabricksWorkspaceTimeoutsOutputReference <a name="DatabricksWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { databricksWorkspace } from '@cdktf/provider-azurerm'

new databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabricksWorkspaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---



