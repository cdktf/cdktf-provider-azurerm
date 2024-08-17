# `sharedImage` Submodule <a name="`sharedImage` Submodule" id="@cdktf/provider-azurerm.sharedImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImage <a name="SharedImage" id="@cdktf/provider-azurerm.sharedImage.SharedImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image azurerm_shared_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

new sharedImage.SharedImage(scope: Construct, id: string, config: SharedImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig">SharedImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig">SharedImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier">putIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan">putPurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled">resetAcceleratedNetworkSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled">resetConfidentialVmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported">resetConfidentialVmSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed">resetDiskTypesNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate">resetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetEula">resetEula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration">resetHyperVGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb">resetMaxRecommendedMemoryInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount">resetMaxRecommendedVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb">resetMinRecommendedMemoryInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount">resetMinRecommendedVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri">resetPrivacyStatementUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan">resetPurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri">resetReleaseNoteUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetSpecialized">resetSpecialized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled">resetTrustedLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchSupported">resetTrustedLaunchSupported</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sharedImage.SharedImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sharedImage.SharedImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentifier` <a name="putIdentifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier"></a>

```typescript
public putIdentifier(value: SharedImageIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `putPurchasePlan` <a name="putPurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan"></a>

```typescript
public putPurchasePlan(value: SharedImagePurchasePlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts"></a>

```typescript
public putTimeouts(value: SharedImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---

##### `resetAcceleratedNetworkSupportEnabled` <a name="resetAcceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled"></a>

```typescript
public resetAcceleratedNetworkSupportEnabled(): void
```

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetArchitecture"></a>

```typescript
public resetArchitecture(): void
```

##### `resetConfidentialVmEnabled` <a name="resetConfidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled"></a>

```typescript
public resetConfidentialVmEnabled(): void
```

##### `resetConfidentialVmSupported` <a name="resetConfidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported"></a>

```typescript
public resetConfidentialVmSupported(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiskTypesNotAllowed` <a name="resetDiskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed"></a>

```typescript
public resetDiskTypesNotAllowed(): void
```

##### `resetEndOfLifeDate` <a name="resetEndOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate"></a>

```typescript
public resetEndOfLifeDate(): void
```

##### `resetEula` <a name="resetEula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetEula"></a>

```typescript
public resetEula(): void
```

##### `resetHyperVGeneration` <a name="resetHyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration"></a>

```typescript
public resetHyperVGeneration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxRecommendedMemoryInGb` <a name="resetMaxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb"></a>

```typescript
public resetMaxRecommendedMemoryInGb(): void
```

##### `resetMaxRecommendedVcpuCount` <a name="resetMaxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount"></a>

```typescript
public resetMaxRecommendedVcpuCount(): void
```

##### `resetMinRecommendedMemoryInGb` <a name="resetMinRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb"></a>

```typescript
public resetMinRecommendedMemoryInGb(): void
```

##### `resetMinRecommendedVcpuCount` <a name="resetMinRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount"></a>

```typescript
public resetMinRecommendedVcpuCount(): void
```

##### `resetPrivacyStatementUri` <a name="resetPrivacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri"></a>

```typescript
public resetPrivacyStatementUri(): void
```

##### `resetPurchasePlan` <a name="resetPurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan"></a>

```typescript
public resetPurchasePlan(): void
```

##### `resetReleaseNoteUri` <a name="resetReleaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri"></a>

```typescript
public resetReleaseNoteUri(): void
```

##### `resetSpecialized` <a name="resetSpecialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetSpecialized"></a>

```typescript
public resetSpecialized(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrustedLaunchEnabled` <a name="resetTrustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled"></a>

```typescript
public resetTrustedLaunchEnabled(): void
```

##### `resetTrustedLaunchSupported` <a name="resetTrustedLaunchSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchSupported"></a>

```typescript
public resetTrustedLaunchSupported(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SharedImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

sharedImage.SharedImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

sharedImage.SharedImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

sharedImage.SharedImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sharedImage.SharedImage.generateConfigForImport"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

sharedImage.SharedImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SharedImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlan">purchasePlan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput">acceleratedNetworkSupportEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput">confidentialVmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput">confidentialVmSupportedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput">diskTypesNotAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput">endOfLifeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.eulaInput">eulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput">galleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput">hyperVGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifierInput">identifierInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput">maxRecommendedMemoryInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput">maxRecommendedVcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput">minRecommendedMemoryInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput">minRecommendedVcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput">privacyStatementUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput">purchasePlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput">releaseNoteUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.specializedInput">specializedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput">trustedLaunchEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupportedInput">trustedLaunchSupportedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled">acceleratedNetworkSupportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled">confidentialVmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported">confidentialVmSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed">diskTypesNotAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate">endOfLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.eula">eula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryName">galleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration">hyperVGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb">maxRecommendedMemoryInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount">maxRecommendedVcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb">minRecommendedMemoryInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount">minRecommendedVcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri">privacyStatementUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri">releaseNoteUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.specialized">specialized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupported">trustedLaunchSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifier"></a>

```typescript
public readonly identifier: SharedImageIdentifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a>

---

##### `purchasePlan`<sup>Required</sup> <a name="purchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlan"></a>

```typescript
public readonly purchasePlan: SharedImagePurchasePlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeouts"></a>

```typescript
public readonly timeouts: SharedImageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a>

---

##### `acceleratedNetworkSupportEnabledInput`<sup>Optional</sup> <a name="acceleratedNetworkSupportEnabledInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput"></a>

```typescript
public readonly acceleratedNetworkSupportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `confidentialVmEnabledInput`<sup>Optional</sup> <a name="confidentialVmEnabledInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput"></a>

```typescript
public readonly confidentialVmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialVmSupportedInput`<sup>Optional</sup> <a name="confidentialVmSupportedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput"></a>

```typescript
public readonly confidentialVmSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskTypesNotAllowedInput`<sup>Optional</sup> <a name="diskTypesNotAllowedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput"></a>

```typescript
public readonly diskTypesNotAllowedInput: string[];
```

- *Type:* string[]

---

##### `endOfLifeDateInput`<sup>Optional</sup> <a name="endOfLifeDateInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput"></a>

```typescript
public readonly endOfLifeDateInput: string;
```

- *Type:* string

---

##### `eulaInput`<sup>Optional</sup> <a name="eulaInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.eulaInput"></a>

```typescript
public readonly eulaInput: string;
```

- *Type:* string

---

##### `galleryNameInput`<sup>Optional</sup> <a name="galleryNameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput"></a>

```typescript
public readonly galleryNameInput: string;
```

- *Type:* string

---

##### `hyperVGenerationInput`<sup>Optional</sup> <a name="hyperVGenerationInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput"></a>

```typescript
public readonly hyperVGenerationInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifierInput"></a>

```typescript
public readonly identifierInput: SharedImageIdentifier;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxRecommendedMemoryInGbInput`<sup>Optional</sup> <a name="maxRecommendedMemoryInGbInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput"></a>

```typescript
public readonly maxRecommendedMemoryInGbInput: number;
```

- *Type:* number

---

##### `maxRecommendedVcpuCountInput`<sup>Optional</sup> <a name="maxRecommendedVcpuCountInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput"></a>

```typescript
public readonly maxRecommendedVcpuCountInput: number;
```

- *Type:* number

---

##### `minRecommendedMemoryInGbInput`<sup>Optional</sup> <a name="minRecommendedMemoryInGbInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput"></a>

```typescript
public readonly minRecommendedMemoryInGbInput: number;
```

- *Type:* number

---

##### `minRecommendedVcpuCountInput`<sup>Optional</sup> <a name="minRecommendedVcpuCountInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput"></a>

```typescript
public readonly minRecommendedVcpuCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `privacyStatementUriInput`<sup>Optional</sup> <a name="privacyStatementUriInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput"></a>

```typescript
public readonly privacyStatementUriInput: string;
```

- *Type:* string

---

##### `purchasePlanInput`<sup>Optional</sup> <a name="purchasePlanInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput"></a>

```typescript
public readonly purchasePlanInput: SharedImagePurchasePlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `releaseNoteUriInput`<sup>Optional</sup> <a name="releaseNoteUriInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput"></a>

```typescript
public readonly releaseNoteUriInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `specializedInput`<sup>Optional</sup> <a name="specializedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.specializedInput"></a>

```typescript
public readonly specializedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SharedImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---

##### `trustedLaunchEnabledInput`<sup>Optional</sup> <a name="trustedLaunchEnabledInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput"></a>

```typescript
public readonly trustedLaunchEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trustedLaunchSupportedInput`<sup>Optional</sup> <a name="trustedLaunchSupportedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupportedInput"></a>

```typescript
public readonly trustedLaunchSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acceleratedNetworkSupportEnabled`<sup>Required</sup> <a name="acceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled"></a>

```typescript
public readonly acceleratedNetworkSupportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `confidentialVmEnabled`<sup>Required</sup> <a name="confidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled"></a>

```typescript
public readonly confidentialVmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialVmSupported`<sup>Required</sup> <a name="confidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported"></a>

```typescript
public readonly confidentialVmSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskTypesNotAllowed`<sup>Required</sup> <a name="diskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed"></a>

```typescript
public readonly diskTypesNotAllowed: string[];
```

- *Type:* string[]

---

##### `endOfLifeDate`<sup>Required</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate"></a>

```typescript
public readonly endOfLifeDate: string;
```

- *Type:* string

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.eula"></a>

```typescript
public readonly eula: string;
```

- *Type:* string

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryName"></a>

```typescript
public readonly galleryName: string;
```

- *Type:* string

---

##### `hyperVGeneration`<sup>Required</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration"></a>

```typescript
public readonly hyperVGeneration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxRecommendedMemoryInGb`<sup>Required</sup> <a name="maxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb"></a>

```typescript
public readonly maxRecommendedMemoryInGb: number;
```

- *Type:* number

---

##### `maxRecommendedVcpuCount`<sup>Required</sup> <a name="maxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount"></a>

```typescript
public readonly maxRecommendedVcpuCount: number;
```

- *Type:* number

---

##### `minRecommendedMemoryInGb`<sup>Required</sup> <a name="minRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb"></a>

```typescript
public readonly minRecommendedMemoryInGb: number;
```

- *Type:* number

---

##### `minRecommendedVcpuCount`<sup>Required</sup> <a name="minRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount"></a>

```typescript
public readonly minRecommendedVcpuCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `privacyStatementUri`<sup>Required</sup> <a name="privacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri"></a>

```typescript
public readonly privacyStatementUri: string;
```

- *Type:* string

---

##### `releaseNoteUri`<sup>Required</sup> <a name="releaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri"></a>

```typescript
public readonly releaseNoteUri: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `specialized`<sup>Required</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.specialized"></a>

```typescript
public readonly specialized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trustedLaunchEnabled`<sup>Required</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled"></a>

```typescript
public readonly trustedLaunchEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trustedLaunchSupported`<sup>Required</sup> <a name="trustedLaunchSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupported"></a>

```typescript
public readonly trustedLaunchSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageConfig <a name="SharedImageConfig" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

const sharedImageConfig: sharedImage.SharedImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName">galleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#location SharedImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#os_type SharedImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled">acceleratedNetworkSupportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.architecture">architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#architecture SharedImage#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled">confidentialVmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported">confidentialVmSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#description SharedImage#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed">diskTypesNotAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate">endOfLifeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.eula">eula</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#eula SharedImage#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration">hyperVGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#id SharedImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb">maxRecommendedMemoryInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount">maxRecommendedVcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb">minRecommendedMemoryInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount">minRecommendedVcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri">privacyStatementUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan">purchasePlan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | purchase_plan block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri">releaseNoteUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.specialized">specialized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#specialized SharedImage#specialized}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#tags SharedImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchSupported">trustedLaunchSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#trusted_launch_supported SharedImage#trusted_launch_supported}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName"></a>

```typescript
public readonly galleryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.identifier"></a>

```typescript
public readonly identifier: SharedImageIdentifier;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#identifier SharedImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#location SharedImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#os_type SharedImage#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}.

---

##### `acceleratedNetworkSupportEnabled`<sup>Optional</sup> <a name="acceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled"></a>

```typescript
public readonly acceleratedNetworkSupportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#architecture SharedImage#architecture}.

---

##### `confidentialVmEnabled`<sup>Optional</sup> <a name="confidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled"></a>

```typescript
public readonly confidentialVmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}.

---

##### `confidentialVmSupported`<sup>Optional</sup> <a name="confidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported"></a>

```typescript
public readonly confidentialVmSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#description SharedImage#description}.

---

##### `diskTypesNotAllowed`<sup>Optional</sup> <a name="diskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed"></a>

```typescript
public readonly diskTypesNotAllowed: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate"></a>

```typescript
public readonly endOfLifeDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}.

---

##### `eula`<sup>Optional</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.eula"></a>

```typescript
public readonly eula: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#eula SharedImage#eula}.

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration"></a>

```typescript
public readonly hyperVGeneration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#id SharedImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRecommendedMemoryInGb`<sup>Optional</sup> <a name="maxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb"></a>

```typescript
public readonly maxRecommendedMemoryInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}.

---

##### `maxRecommendedVcpuCount`<sup>Optional</sup> <a name="maxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount"></a>

```typescript
public readonly maxRecommendedVcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}.

---

##### `minRecommendedMemoryInGb`<sup>Optional</sup> <a name="minRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb"></a>

```typescript
public readonly minRecommendedMemoryInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}.

---

##### `minRecommendedVcpuCount`<sup>Optional</sup> <a name="minRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount"></a>

```typescript
public readonly minRecommendedVcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}.

---

##### `privacyStatementUri`<sup>Optional</sup> <a name="privacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri"></a>

```typescript
public readonly privacyStatementUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}.

---

##### `purchasePlan`<sup>Optional</sup> <a name="purchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan"></a>

```typescript
public readonly purchasePlan: SharedImagePurchasePlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

purchase_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#purchase_plan SharedImage#purchase_plan}

---

##### `releaseNoteUri`<sup>Optional</sup> <a name="releaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri"></a>

```typescript
public readonly releaseNoteUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}.

---

##### `specialized`<sup>Optional</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.specialized"></a>

```typescript
public readonly specialized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#specialized SharedImage#specialized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#tags SharedImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SharedImageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#timeouts SharedImage#timeouts}

---

##### `trustedLaunchEnabled`<sup>Optional</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled"></a>

```typescript
public readonly trustedLaunchEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}.

---

##### `trustedLaunchSupported`<sup>Optional</sup> <a name="trustedLaunchSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchSupported"></a>

```typescript
public readonly trustedLaunchSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#trusted_launch_supported SharedImage#trusted_launch_supported}.

---

### SharedImageIdentifier <a name="SharedImageIdentifier" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

const sharedImageIdentifier: sharedImage.SharedImageIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#offer SharedImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#publisher SharedImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#sku SharedImage#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#offer SharedImage#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#sku SharedImage#sku}.

---

### SharedImagePurchasePlan <a name="SharedImagePurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

const sharedImagePurchasePlan: sharedImage.SharedImagePurchasePlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#product SharedImage#product}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#publisher SharedImage#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#product SharedImage#product}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

### SharedImageTimeouts <a name="SharedImageTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

const sharedImageTimeouts: sharedImage.SharedImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#create SharedImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#delete SharedImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#read SharedImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#update SharedImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#create SharedImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#delete SharedImage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#read SharedImage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/shared_image#update SharedImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageIdentifierOutputReference <a name="SharedImageIdentifierOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

new sharedImage.SharedImageIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SharedImageIdentifier;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---


### SharedImagePurchasePlanOutputReference <a name="SharedImagePurchasePlanOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

new sharedImage.SharedImagePurchasePlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher"></a>

```typescript
public resetPublisher(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SharedImagePurchasePlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---


### SharedImageTimeoutsOutputReference <a name="SharedImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { sharedImage } from '@cdktf/provider-azurerm'

new sharedImage.SharedImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharedImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---



