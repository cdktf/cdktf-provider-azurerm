# `arcKubernetesProvisionedCluster` Submodule <a name="`arcKubernetesProvisionedCluster` Submodule" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesProvisionedCluster <a name="ArcKubernetesProvisionedCluster" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster azurerm_arc_kubernetes_provisioned_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

new arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster(scope: Construct, id: string, config: ArcKubernetesProvisionedClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig">ArcKubernetesProvisionedClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig">ArcKubernetesProvisionedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putAzureActiveDirectory">putAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentAutoUpgradeEnabled">resetArcAgentAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentDesiredVersion">resetArcAgentDesiredVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetAzureActiveDirectory">resetAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureActiveDirectory` <a name="putAzureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putAzureActiveDirectory"></a>

```typescript
public putAzureActiveDirectory(value: ArcKubernetesProvisionedClusterAzureActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putAzureActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putIdentity"></a>

```typescript
public putIdentity(value: ArcKubernetesProvisionedClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ArcKubernetesProvisionedClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

---

##### `resetArcAgentAutoUpgradeEnabled` <a name="resetArcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentAutoUpgradeEnabled"></a>

```typescript
public resetArcAgentAutoUpgradeEnabled(): void
```

##### `resetArcAgentDesiredVersion` <a name="resetArcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetArcAgentDesiredVersion"></a>

```typescript
public resetArcAgentDesiredVersion(): void
```

##### `resetAzureActiveDirectory` <a name="resetAzureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetAzureActiveDirectory"></a>

```typescript
public resetAzureActiveDirectory(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArcKubernetesProvisionedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArcKubernetesProvisionedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcKubernetesProvisionedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcKubernetesProvisionedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesProvisionedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference">ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference">ArcKubernetesProvisionedClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.infrastructure">infrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.offering">offering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference">ArcKubernetesProvisionedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalCoreCount">totalCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalNodeCount">totalNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabledInput">arcAgentAutoUpgradeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersionInput">arcAgentDesiredVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectoryInput">azureActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabled">arcAgentAutoUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersion">arcAgentDesiredVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `azureActiveDirectory`<sup>Required</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectory"></a>

```typescript
public readonly azureActiveDirectory: ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference">ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference</a>

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identity"></a>

```typescript
public readonly identity: ArcKubernetesProvisionedClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference">ArcKubernetesProvisionedClusterIdentityOutputReference</a>

---

##### `infrastructure`<sup>Required</sup> <a name="infrastructure" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.infrastructure"></a>

```typescript
public readonly infrastructure: string;
```

- *Type:* string

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `offering`<sup>Required</sup> <a name="offering" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.offering"></a>

```typescript
public readonly offering: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ArcKubernetesProvisionedClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference">ArcKubernetesProvisionedClusterTimeoutsOutputReference</a>

---

##### `totalCoreCount`<sup>Required</sup> <a name="totalCoreCount" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalCoreCount"></a>

```typescript
public readonly totalCoreCount: number;
```

- *Type:* number

---

##### `totalNodeCount`<sup>Required</sup> <a name="totalNodeCount" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.totalNodeCount"></a>

```typescript
public readonly totalNodeCount: number;
```

- *Type:* number

---

##### `arcAgentAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="arcAgentAutoUpgradeEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabledInput"></a>

```typescript
public readonly arcAgentAutoUpgradeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `arcAgentDesiredVersionInput`<sup>Optional</sup> <a name="arcAgentDesiredVersionInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersionInput"></a>

```typescript
public readonly arcAgentDesiredVersionInput: string;
```

- *Type:* string

---

##### `azureActiveDirectoryInput`<sup>Optional</sup> <a name="azureActiveDirectoryInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.azureActiveDirectoryInput"></a>

```typescript
public readonly azureActiveDirectoryInput: ArcKubernetesProvisionedClusterAzureActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.identityInput"></a>

```typescript
public readonly identityInput: ArcKubernetesProvisionedClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArcKubernetesProvisionedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

---

##### `arcAgentAutoUpgradeEnabled`<sup>Required</sup> <a name="arcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentAutoUpgradeEnabled"></a>

```typescript
public readonly arcAgentAutoUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `arcAgentDesiredVersion`<sup>Required</sup> <a name="arcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.arcAgentDesiredVersion"></a>

```typescript
public readonly arcAgentDesiredVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesProvisionedClusterAzureActiveDirectory <a name="ArcKubernetesProvisionedClusterAzureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

const arcKubernetesProvisionedClusterAzureActiveDirectory: arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.adminGroupObjectIds">adminGroupObjectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#admin_group_object_ids ArcKubernetesProvisionedCluster#admin_group_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.azureRbacEnabled">azureRbacEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_rbac_enabled ArcKubernetesProvisionedCluster#azure_rbac_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#tenant_id ArcKubernetesProvisionedCluster#tenant_id}. |

---

##### `adminGroupObjectIds`<sup>Optional</sup> <a name="adminGroupObjectIds" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.adminGroupObjectIds"></a>

```typescript
public readonly adminGroupObjectIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#admin_group_object_ids ArcKubernetesProvisionedCluster#admin_group_object_ids}.

---

##### `azureRbacEnabled`<sup>Optional</sup> <a name="azureRbacEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.azureRbacEnabled"></a>

```typescript
public readonly azureRbacEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_rbac_enabled ArcKubernetesProvisionedCluster#azure_rbac_enabled}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#tenant_id ArcKubernetesProvisionedCluster#tenant_id}.

---

### ArcKubernetesProvisionedClusterConfig <a name="ArcKubernetesProvisionedClusterConfig" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

const arcKubernetesProvisionedClusterConfig: arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#location ArcKubernetesProvisionedCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#name ArcKubernetesProvisionedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#resource_group_name ArcKubernetesProvisionedCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentAutoUpgradeEnabled">arcAgentAutoUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_auto_upgrade_enabled ArcKubernetesProvisionedCluster#arc_agent_auto_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentDesiredVersion">arcAgentDesiredVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_desired_version ArcKubernetesProvisionedCluster#arc_agent_desired_version}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#id ArcKubernetesProvisionedCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#tags ArcKubernetesProvisionedCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.identity"></a>

```typescript
public readonly identity: ArcKubernetesProvisionedClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#identity ArcKubernetesProvisionedCluster#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#location ArcKubernetesProvisionedCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#name ArcKubernetesProvisionedCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#resource_group_name ArcKubernetesProvisionedCluster#resource_group_name}.

---

##### `arcAgentAutoUpgradeEnabled`<sup>Optional</sup> <a name="arcAgentAutoUpgradeEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentAutoUpgradeEnabled"></a>

```typescript
public readonly arcAgentAutoUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_auto_upgrade_enabled ArcKubernetesProvisionedCluster#arc_agent_auto_upgrade_enabled}.

---

##### `arcAgentDesiredVersion`<sup>Optional</sup> <a name="arcAgentDesiredVersion" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.arcAgentDesiredVersion"></a>

```typescript
public readonly arcAgentDesiredVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#arc_agent_desired_version ArcKubernetesProvisionedCluster#arc_agent_desired_version}.

---

##### `azureActiveDirectory`<sup>Optional</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.azureActiveDirectory"></a>

```typescript
public readonly azureActiveDirectory: ArcKubernetesProvisionedClusterAzureActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#azure_active_directory ArcKubernetesProvisionedCluster#azure_active_directory}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#id ArcKubernetesProvisionedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#tags ArcKubernetesProvisionedCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArcKubernetesProvisionedClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#timeouts ArcKubernetesProvisionedCluster#timeouts}

---

### ArcKubernetesProvisionedClusterIdentity <a name="ArcKubernetesProvisionedClusterIdentity" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

const arcKubernetesProvisionedClusterIdentity: arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#type ArcKubernetesProvisionedCluster#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#type ArcKubernetesProvisionedCluster#type}.

---

### ArcKubernetesProvisionedClusterTimeouts <a name="ArcKubernetesProvisionedClusterTimeouts" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

const arcKubernetesProvisionedClusterTimeouts: arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#create ArcKubernetesProvisionedCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#delete ArcKubernetesProvisionedCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#read ArcKubernetesProvisionedCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#update ArcKubernetesProvisionedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#create ArcKubernetesProvisionedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#delete ArcKubernetesProvisionedCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#read ArcKubernetesProvisionedCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/arc_kubernetes_provisioned_cluster#update ArcKubernetesProvisionedCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference <a name="ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

new arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAdminGroupObjectIds">resetAdminGroupObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAzureRbacEnabled">resetAzureRbacEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminGroupObjectIds` <a name="resetAdminGroupObjectIds" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAdminGroupObjectIds"></a>

```typescript
public resetAdminGroupObjectIds(): void
```

##### `resetAzureRbacEnabled` <a name="resetAzureRbacEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetAzureRbacEnabled"></a>

```typescript
public resetAzureRbacEnabled(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIdsInput">adminGroupObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabledInput">azureRbacEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIds">adminGroupObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabled">azureRbacEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminGroupObjectIdsInput`<sup>Optional</sup> <a name="adminGroupObjectIdsInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIdsInput"></a>

```typescript
public readonly adminGroupObjectIdsInput: string[];
```

- *Type:* string[]

---

##### `azureRbacEnabledInput`<sup>Optional</sup> <a name="azureRbacEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabledInput"></a>

```typescript
public readonly azureRbacEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `adminGroupObjectIds`<sup>Required</sup> <a name="adminGroupObjectIds" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.adminGroupObjectIds"></a>

```typescript
public readonly adminGroupObjectIds: string[];
```

- *Type:* string[]

---

##### `azureRbacEnabled`<sup>Required</sup> <a name="azureRbacEnabled" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.azureRbacEnabled"></a>

```typescript
public readonly azureRbacEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcKubernetesProvisionedClusterAzureActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterAzureActiveDirectory">ArcKubernetesProvisionedClusterAzureActiveDirectory</a>

---


### ArcKubernetesProvisionedClusterIdentityOutputReference <a name="ArcKubernetesProvisionedClusterIdentityOutputReference" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

new arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcKubernetesProvisionedClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterIdentity">ArcKubernetesProvisionedClusterIdentity</a>

---


### ArcKubernetesProvisionedClusterTimeoutsOutputReference <a name="ArcKubernetesProvisionedClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { arcKubernetesProvisionedCluster } from '@cdktf/provider-azurerm'

new arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArcKubernetesProvisionedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesProvisionedCluster.ArcKubernetesProvisionedClusterTimeouts">ArcKubernetesProvisionedClusterTimeouts</a>

---



