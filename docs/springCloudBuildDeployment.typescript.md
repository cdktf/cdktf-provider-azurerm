# `springCloudBuildDeployment` Submodule <a name="`springCloudBuildDeployment` Submodule" id="@cdktf/provider-azurerm.springCloudBuildDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudBuildDeployment <a name="SpringCloudBuildDeployment" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment azurerm_spring_cloud_build_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

new springCloudBuildDeployment.SpringCloudBuildDeployment(scope: Construct, id: string, config: SpringCloudBuildDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig">SpringCloudBuildDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig">SpringCloudBuildDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetAddonJson">resetAddonJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetApplicationPerformanceMonitoringIds">resetApplicationPerformanceMonitoringIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.putQuota"></a>

```typescript
public putQuota(value: SpringCloudBuildDeploymentQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudBuildDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a>

---

##### `resetAddonJson` <a name="resetAddonJson" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetAddonJson"></a>

```typescript
public resetAddonJson(): void
```

##### `resetApplicationPerformanceMonitoringIds` <a name="resetApplicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetApplicationPerformanceMonitoringIds"></a>

```typescript
public resetApplicationPerformanceMonitoringIds(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudBuildDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isConstruct"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

springCloudBuildDeployment.SpringCloudBuildDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformElement"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformResource"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudBuildDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudBuildDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudBuildDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudBuildDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference">SpringCloudBuildDeploymentQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference">SpringCloudBuildDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.addonJsonInput">addonJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.applicationPerformanceMonitoringIdsInput">applicationPerformanceMonitoringIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.buildResultIdInput">buildResultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.springCloudAppIdInput">springCloudAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.addonJson">addonJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.buildResultId">buildResultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.quota"></a>

```typescript
public readonly quota: SpringCloudBuildDeploymentQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference">SpringCloudBuildDeploymentQuotaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudBuildDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference">SpringCloudBuildDeploymentTimeoutsOutputReference</a>

---

##### `addonJsonInput`<sup>Optional</sup> <a name="addonJsonInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.addonJsonInput"></a>

```typescript
public readonly addonJsonInput: string;
```

- *Type:* string

---

##### `applicationPerformanceMonitoringIdsInput`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIdsInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.applicationPerformanceMonitoringIdsInput"></a>

```typescript
public readonly applicationPerformanceMonitoringIdsInput: string[];
```

- *Type:* string[]

---

##### `buildResultIdInput`<sup>Optional</sup> <a name="buildResultIdInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.buildResultIdInput"></a>

```typescript
public readonly buildResultIdInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.quotaInput"></a>

```typescript
public readonly quotaInput: SpringCloudBuildDeploymentQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a>

---

##### `springCloudAppIdInput`<sup>Optional</sup> <a name="springCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.springCloudAppIdInput"></a>

```typescript
public readonly springCloudAppIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudBuildDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a>

---

##### `addonJson`<sup>Required</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.addonJson"></a>

```typescript
public readonly addonJson: string;
```

- *Type:* string

---

##### `applicationPerformanceMonitoringIds`<sup>Required</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.applicationPerformanceMonitoringIds"></a>

```typescript
public readonly applicationPerformanceMonitoringIds: string[];
```

- *Type:* string[]

---

##### `buildResultId`<sup>Required</sup> <a name="buildResultId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.buildResultId"></a>

```typescript
public readonly buildResultId: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudBuildDeploymentConfig <a name="SpringCloudBuildDeploymentConfig" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.Initializer"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

const springCloudBuildDeploymentConfig: springCloudBuildDeployment.SpringCloudBuildDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.buildResultId">buildResultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#build_result_id SpringCloudBuildDeployment#build_result_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#name SpringCloudBuildDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#spring_cloud_app_id SpringCloudBuildDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.addonJson">addonJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#addon_json SpringCloudBuildDeployment#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#application_performance_monitoring_ids SpringCloudBuildDeployment#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#environment_variables SpringCloudBuildDeployment#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#id SpringCloudBuildDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#instance_count SpringCloudBuildDeployment#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildResultId`<sup>Required</sup> <a name="buildResultId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.buildResultId"></a>

```typescript
public readonly buildResultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#build_result_id SpringCloudBuildDeployment#build_result_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#name SpringCloudBuildDeployment#name}.

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#spring_cloud_app_id SpringCloudBuildDeployment#spring_cloud_app_id}.

---

##### `addonJson`<sup>Optional</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.addonJson"></a>

```typescript
public readonly addonJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#addon_json SpringCloudBuildDeployment#addon_json}.

---

##### `applicationPerformanceMonitoringIds`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.applicationPerformanceMonitoringIds"></a>

```typescript
public readonly applicationPerformanceMonitoringIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#application_performance_monitoring_ids SpringCloudBuildDeployment#application_performance_monitoring_ids}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#environment_variables SpringCloudBuildDeployment#environment_variables}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#id SpringCloudBuildDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#instance_count SpringCloudBuildDeployment#instance_count}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.quota"></a>

```typescript
public readonly quota: SpringCloudBuildDeploymentQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#quota SpringCloudBuildDeployment#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudBuildDeploymentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#timeouts SpringCloudBuildDeployment#timeouts}

---

### SpringCloudBuildDeploymentQuota <a name="SpringCloudBuildDeploymentQuota" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota.Initializer"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

const springCloudBuildDeploymentQuota: springCloudBuildDeployment.SpringCloudBuildDeploymentQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#cpu SpringCloudBuildDeployment#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#memory SpringCloudBuildDeployment#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#cpu SpringCloudBuildDeployment#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#memory SpringCloudBuildDeployment#memory}.

---

### SpringCloudBuildDeploymentTimeouts <a name="SpringCloudBuildDeploymentTimeouts" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.Initializer"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

const springCloudBuildDeploymentTimeouts: springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#create SpringCloudBuildDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#delete SpringCloudBuildDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#read SpringCloudBuildDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#update SpringCloudBuildDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#create SpringCloudBuildDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#delete SpringCloudBuildDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#read SpringCloudBuildDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/spring_cloud_build_deployment#update SpringCloudBuildDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudBuildDeploymentQuotaOutputReference <a name="SpringCloudBuildDeploymentQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.Initializer"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

new springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudBuildDeploymentQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentQuota">SpringCloudBuildDeploymentQuota</a>

---


### SpringCloudBuildDeploymentTimeoutsOutputReference <a name="SpringCloudBuildDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudBuildDeployment } from '@cdktf/provider-azurerm'

new springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudBuildDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudBuildDeployment.SpringCloudBuildDeploymentTimeouts">SpringCloudBuildDeploymentTimeouts</a>

---



