# `kubernetesClusterExtension` Submodule <a name="`kubernetesClusterExtension` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterExtension <a name="KubernetesClusterExtension" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension azurerm_kubernetes_cluster_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

new kubernetesClusterExtension.KubernetesClusterExtension(scope: Construct, id: string, config: KubernetesClusterExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig">KubernetesClusterExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig">KubernetesClusterExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationProtectedSettings">resetConfigurationProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationSettings">resetConfigurationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseNamespace">resetReleaseNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseTrain">resetReleaseTrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTargetNamespace">resetTargetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan"></a>

```typescript
public putPlan(value: KubernetesClusterExtensionPlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesClusterExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

---

##### `resetConfigurationProtectedSettings` <a name="resetConfigurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationProtectedSettings"></a>

```typescript
public resetConfigurationProtectedSettings(): void
```

##### `resetConfigurationSettings` <a name="resetConfigurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationSettings"></a>

```typescript
public resetConfigurationSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetReleaseNamespace` <a name="resetReleaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseNamespace"></a>

```typescript
public resetReleaseNamespace(): void
```

##### `resetReleaseTrain` <a name="resetReleaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseTrain"></a>

```typescript
public resetReleaseTrain(): void
```

##### `resetTargetNamespace` <a name="resetTargetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTargetNamespace"></a>

```typescript
public resetTargetNamespace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesClusterExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

kubernetesClusterExtension.KubernetesClusterExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesClusterExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesClusterExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesClusterExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.aksAssignedIdentity">aksAssignedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList">KubernetesClusterExtensionAksAssignedIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.currentVersion">currentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference">KubernetesClusterExtensionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference">KubernetesClusterExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettingsInput">configurationProtectedSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettingsInput">configurationSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionTypeInput">extensionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespaceInput">releaseNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrainInput">releaseTrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespaceInput">targetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettings">configurationProtectedSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettings">configurationSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionType">extensionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespace">releaseNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrain">releaseTrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespace">targetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aksAssignedIdentity`<sup>Required</sup> <a name="aksAssignedIdentity" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.aksAssignedIdentity"></a>

```typescript
public readonly aksAssignedIdentity: KubernetesClusterExtensionAksAssignedIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList">KubernetesClusterExtensionAksAssignedIdentityList</a>

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.plan"></a>

```typescript
public readonly plan: KubernetesClusterExtensionPlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference">KubernetesClusterExtensionPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesClusterExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference">KubernetesClusterExtensionTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `configurationProtectedSettingsInput`<sup>Optional</sup> <a name="configurationProtectedSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettingsInput"></a>

```typescript
public readonly configurationProtectedSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configurationSettingsInput`<sup>Optional</sup> <a name="configurationSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettingsInput"></a>

```typescript
public readonly configurationSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extensionTypeInput`<sup>Optional</sup> <a name="extensionTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionTypeInput"></a>

```typescript
public readonly extensionTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.planInput"></a>

```typescript
public readonly planInput: KubernetesClusterExtensionPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---

##### `releaseNamespaceInput`<sup>Optional</sup> <a name="releaseNamespaceInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespaceInput"></a>

```typescript
public readonly releaseNamespaceInput: string;
```

- *Type:* string

---

##### `releaseTrainInput`<sup>Optional</sup> <a name="releaseTrainInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrainInput"></a>

```typescript
public readonly releaseTrainInput: string;
```

- *Type:* string

---

##### `targetNamespaceInput`<sup>Optional</sup> <a name="targetNamespaceInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespaceInput"></a>

```typescript
public readonly targetNamespaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesClusterExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `configurationProtectedSettings`<sup>Required</sup> <a name="configurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettings"></a>

```typescript
public readonly configurationProtectedSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configurationSettings`<sup>Required</sup> <a name="configurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettings"></a>

```typescript
public readonly configurationSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extensionType`<sup>Required</sup> <a name="extensionType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionType"></a>

```typescript
public readonly extensionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `releaseNamespace`<sup>Required</sup> <a name="releaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespace"></a>

```typescript
public readonly releaseNamespace: string;
```

- *Type:* string

---

##### `releaseTrain`<sup>Required</sup> <a name="releaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrain"></a>

```typescript
public readonly releaseTrain: string;
```

- *Type:* string

---

##### `targetNamespace`<sup>Required</sup> <a name="targetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespace"></a>

```typescript
public readonly targetNamespace: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterExtensionAksAssignedIdentity <a name="KubernetesClusterExtensionAksAssignedIdentity" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

const kubernetesClusterExtensionAksAssignedIdentity: kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity = { ... }
```


### KubernetesClusterExtensionConfig <a name="KubernetesClusterExtensionConfig" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

const kubernetesClusterExtensionConfig: kubernetesClusterExtension.KubernetesClusterExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.extensionType">extensionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationProtectedSettings">configurationProtectedSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationSettings">configurationSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseNamespace">releaseNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseTrain">releaseTrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.targetNamespace">targetNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}.

---

##### `extensionType`<sup>Required</sup> <a name="extensionType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.extensionType"></a>

```typescript
public readonly extensionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `configurationProtectedSettings`<sup>Optional</sup> <a name="configurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationProtectedSettings"></a>

```typescript
public readonly configurationProtectedSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}.

---

##### `configurationSettings`<sup>Optional</sup> <a name="configurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationSettings"></a>

```typescript
public readonly configurationSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.plan"></a>

```typescript
public readonly plan: KubernetesClusterExtensionPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#plan KubernetesClusterExtension#plan}

---

##### `releaseNamespace`<sup>Optional</sup> <a name="releaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseNamespace"></a>

```typescript
public readonly releaseNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}.

---

##### `releaseTrain`<sup>Optional</sup> <a name="releaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseTrain"></a>

```typescript
public readonly releaseTrain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}.

---

##### `targetNamespace`<sup>Optional</sup> <a name="targetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.targetNamespace"></a>

```typescript
public readonly targetNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesClusterExtensionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#timeouts KubernetesClusterExtension#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

### KubernetesClusterExtensionPlan <a name="KubernetesClusterExtensionPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

const kubernetesClusterExtensionPlan: kubernetesClusterExtension.KubernetesClusterExtensionPlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.promotionCode">promotionCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}.

---

##### `promotionCode`<sup>Optional</sup> <a name="promotionCode" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.promotionCode"></a>

```typescript
public readonly promotionCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

### KubernetesClusterExtensionTimeouts <a name="KubernetesClusterExtensionTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

const kubernetesClusterExtensionTimeouts: kubernetesClusterExtension.KubernetesClusterExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterExtensionAksAssignedIdentityList <a name="KubernetesClusterExtensionAksAssignedIdentityList" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

new kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get"></a>

```typescript
public get(index: number): KubernetesClusterExtensionAksAssignedIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KubernetesClusterExtensionAksAssignedIdentityOutputReference <a name="KubernetesClusterExtensionAksAssignedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

new kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity">KubernetesClusterExtensionAksAssignedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterExtensionAksAssignedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity">KubernetesClusterExtensionAksAssignedIdentity</a>

---


### KubernetesClusterExtensionPlanOutputReference <a name="KubernetesClusterExtensionPlanOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

new kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetPromotionCode">resetPromotionCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPromotionCode` <a name="resetPromotionCode" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetPromotionCode"></a>

```typescript
public resetPromotionCode(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCodeInput">promotionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCode">promotionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `promotionCodeInput`<sup>Optional</sup> <a name="promotionCodeInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCodeInput"></a>

```typescript
public readonly promotionCodeInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `promotionCode`<sup>Required</sup> <a name="promotionCode" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCode"></a>

```typescript
public readonly promotionCode: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesClusterExtensionPlan;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---


### KubernetesClusterExtensionTimeoutsOutputReference <a name="KubernetesClusterExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesClusterExtension } from '@cdktf/provider-azurerm'

new kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesClusterExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

---



