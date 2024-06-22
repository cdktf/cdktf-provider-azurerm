# `machineLearningComputeCluster` Submodule <a name="`machineLearningComputeCluster` Submodule" id="@cdktf/provider-azurerm.machineLearningComputeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningComputeCluster <a name="MachineLearningComputeCluster" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster azurerm_machine_learning_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

new machineLearningComputeCluster.MachineLearningComputeCluster(scope: Construct, id: string, config: MachineLearningComputeClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig">MachineLearningComputeClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig">MachineLearningComputeClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings">putScaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh">putSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetNodePublicIpEnabled">resetNodePublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSsh">resetSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSshPublicAccessEnabled">resetSshPublicAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSubnetResourceId">resetSubnetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity"></a>

```typescript
public putIdentity(value: MachineLearningComputeClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---

##### `putScaleSettings` <a name="putScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings"></a>

```typescript
public putScaleSettings(value: MachineLearningComputeClusterScaleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---

##### `putSsh` <a name="putSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh"></a>

```typescript
public putSsh(value: MachineLearningComputeClusterSsh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineLearningComputeClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetLocalAuthEnabled"></a>

```typescript
public resetLocalAuthEnabled(): void
```

##### `resetNodePublicIpEnabled` <a name="resetNodePublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetNodePublicIpEnabled"></a>

```typescript
public resetNodePublicIpEnabled(): void
```

##### `resetSsh` <a name="resetSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSsh"></a>

```typescript
public resetSsh(): void
```

##### `resetSshPublicAccessEnabled` <a name="resetSshPublicAccessEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSshPublicAccessEnabled"></a>

```typescript
public resetSshPublicAccessEnabled(): void
```

##### `resetSubnetResourceId` <a name="resetSubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSubnetResourceId"></a>

```typescript
public resetSubnetResourceId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningComputeCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MachineLearningComputeCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningComputeCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningComputeCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningComputeCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference">MachineLearningComputeClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettings">scaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference">MachineLearningComputeClusterScaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference">MachineLearningComputeClusterSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference">MachineLearningComputeClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceIdInput">machineLearningWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabledInput">nodePublicIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettingsInput">scaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshInput">sshInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabledInput">sshPublicAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceIdInput">subnetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriorityInput">vmPriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabled">sshPublicAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceId">subnetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriority">vmPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identity"></a>

```typescript
public readonly identity: MachineLearningComputeClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference">MachineLearningComputeClusterIdentityOutputReference</a>

---

##### `scaleSettings`<sup>Required</sup> <a name="scaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettings"></a>

```typescript
public readonly scaleSettings: MachineLearningComputeClusterScaleSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference">MachineLearningComputeClusterScaleSettingsOutputReference</a>

---

##### `ssh`<sup>Required</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.ssh"></a>

```typescript
public readonly ssh: MachineLearningComputeClusterSshOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference">MachineLearningComputeClusterSshOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningComputeClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference">MachineLearningComputeClusterTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identityInput"></a>

```typescript
public readonly identityInput: MachineLearningComputeClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabledInput"></a>

```typescript
public readonly localAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `machineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="machineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceIdInput"></a>

```typescript
public readonly machineLearningWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePublicIpEnabledInput`<sup>Optional</sup> <a name="nodePublicIpEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabledInput"></a>

```typescript
public readonly nodePublicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scaleSettingsInput`<sup>Optional</sup> <a name="scaleSettingsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettingsInput"></a>

```typescript
public readonly scaleSettingsInput: MachineLearningComputeClusterScaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---

##### `sshInput`<sup>Optional</sup> <a name="sshInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshInput"></a>

```typescript
public readonly sshInput: MachineLearningComputeClusterSsh;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---

##### `sshPublicAccessEnabledInput`<sup>Optional</sup> <a name="sshPublicAccessEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabledInput"></a>

```typescript
public readonly sshPublicAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetResourceIdInput`<sup>Optional</sup> <a name="subnetResourceIdInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceIdInput"></a>

```typescript
public readonly subnetResourceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MachineLearningComputeClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

---

##### `vmPriorityInput`<sup>Optional</sup> <a name="vmPriorityInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriorityInput"></a>

```typescript
public readonly vmPriorityInput: string;
```

- *Type:* string

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceId"></a>

```typescript
public readonly machineLearningWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodePublicIpEnabled`<sup>Required</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabled"></a>

```typescript
public readonly nodePublicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPublicAccessEnabled`<sup>Required</sup> <a name="sshPublicAccessEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabled"></a>

```typescript
public readonly sshPublicAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetResourceId`<sup>Required</sup> <a name="subnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceId"></a>

```typescript
public readonly subnetResourceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vmPriority`<sup>Required</sup> <a name="vmPriority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriority"></a>

```typescript
public readonly vmPriority: string;
```

- *Type:* string

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningComputeClusterConfig <a name="MachineLearningComputeClusterConfig" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

const machineLearningComputeClusterConfig: machineLearningComputeCluster.MachineLearningComputeClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.scaleSettings">scaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | scale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmPriority">vmPriority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.sshPublicAccessEnabled">sshPublicAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.subnetResourceId">subnetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}.

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.machineLearningWorkspaceId"></a>

```typescript
public readonly machineLearningWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}.

---

##### `scaleSettings`<sup>Required</sup> <a name="scaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.scaleSettings"></a>

```typescript
public readonly scaleSettings: MachineLearningComputeClusterScaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

scale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#scale_settings MachineLearningComputeCluster#scale_settings}

---

##### `vmPriority`<sup>Required</sup> <a name="vmPriority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmPriority"></a>

```typescript
public readonly vmPriority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.identity"></a>

```typescript
public readonly identity: MachineLearningComputeClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#identity MachineLearningComputeCluster#identity}

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}.

---

##### `nodePublicIpEnabled`<sup>Optional</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.nodePublicIpEnabled"></a>

```typescript
public readonly nodePublicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}.

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.ssh"></a>

```typescript
public readonly ssh: MachineLearningComputeClusterSsh;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#ssh MachineLearningComputeCluster#ssh}

---

##### `sshPublicAccessEnabled`<sup>Optional</sup> <a name="sshPublicAccessEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.sshPublicAccessEnabled"></a>

```typescript
public readonly sshPublicAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}.

---

##### `subnetResourceId`<sup>Optional</sup> <a name="subnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.subnetResourceId"></a>

```typescript
public readonly subnetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningComputeClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#timeouts MachineLearningComputeCluster#timeouts}

---

### MachineLearningComputeClusterIdentity <a name="MachineLearningComputeClusterIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

const machineLearningComputeClusterIdentity: machineLearningComputeCluster.MachineLearningComputeClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}.

---

### MachineLearningComputeClusterScaleSettings <a name="MachineLearningComputeClusterScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

const machineLearningComputeClusterScaleSettings: machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.scaleDownNodesAfterIdleDuration">scaleDownNodesAfterIdleDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}.

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}.

---

##### `scaleDownNodesAfterIdleDuration`<sup>Required</sup> <a name="scaleDownNodesAfterIdleDuration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.scaleDownNodesAfterIdleDuration"></a>

```typescript
public readonly scaleDownNodesAfterIdleDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}.

---

### MachineLearningComputeClusterSsh <a name="MachineLearningComputeClusterSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

const machineLearningComputeClusterSsh: machineLearningComputeCluster.MachineLearningComputeClusterSsh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.keyValue">keyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}. |

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}.

---

##### `keyValue`<sup>Optional</sup> <a name="keyValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}.

---

### MachineLearningComputeClusterTimeouts <a name="MachineLearningComputeClusterTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

const machineLearningComputeClusterTimeouts: machineLearningComputeCluster.MachineLearningComputeClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningComputeClusterIdentityOutputReference <a name="MachineLearningComputeClusterIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

new machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningComputeClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---


### MachineLearningComputeClusterScaleSettingsOutputReference <a name="MachineLearningComputeClusterScaleSettingsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

new machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDurationInput">scaleDownNodesAfterIdleDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDuration">scaleDownNodesAfterIdleDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `scaleDownNodesAfterIdleDurationInput`<sup>Optional</sup> <a name="scaleDownNodesAfterIdleDurationInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDurationInput"></a>

```typescript
public readonly scaleDownNodesAfterIdleDurationInput: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `scaleDownNodesAfterIdleDuration`<sup>Required</sup> <a name="scaleDownNodesAfterIdleDuration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDuration"></a>

```typescript
public readonly scaleDownNodesAfterIdleDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningComputeClusterScaleSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---


### MachineLearningComputeClusterSshOutputReference <a name="MachineLearningComputeClusterSshOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

new machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetKeyValue">resetKeyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetKeyValue` <a name="resetKeyValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetKeyValue"></a>

```typescript
public resetKeyValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValueInput">keyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValue">keyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `keyValueInput`<sup>Optional</sup> <a name="keyValueInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValueInput"></a>

```typescript
public readonly keyValueInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningComputeClusterSsh;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---


### MachineLearningComputeClusterTimeoutsOutputReference <a name="MachineLearningComputeClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { machineLearningComputeCluster } from '@cdktf/provider-azurerm'

new machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningComputeClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

---



