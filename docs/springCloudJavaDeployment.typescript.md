# `springCloudJavaDeployment` Submodule <a name="`springCloudJavaDeployment` Submodule" id="@cdktf/provider-azurerm.springCloudJavaDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudJavaDeployment <a name="SpringCloudJavaDeployment" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment azurerm_spring_cloud_java_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

new springCloudJavaDeployment.SpringCloudJavaDeployment(scope: Construct, id: string, config: SpringCloudJavaDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig">SpringCloudJavaDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig">SpringCloudJavaDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetJvmOptions">resetJvmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putQuota"></a>

```typescript
public putQuota(value: SpringCloudJavaDeploymentQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudJavaDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a>

---

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetJvmOptions` <a name="resetJvmOptions" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetJvmOptions"></a>

```typescript
public resetJvmOptions(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudJavaDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudJavaDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudJavaDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudJavaDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudJavaDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference">SpringCloudJavaDeploymentQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference">SpringCloudJavaDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptionsInput">jvmOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppIdInput">springCloudAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptions">jvmOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quota"></a>

```typescript
public readonly quota: SpringCloudJavaDeploymentQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference">SpringCloudJavaDeploymentQuotaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudJavaDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference">SpringCloudJavaDeploymentTimeoutsOutputReference</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `jvmOptionsInput`<sup>Optional</sup> <a name="jvmOptionsInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptionsInput"></a>

```typescript
public readonly jvmOptionsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quotaInput"></a>

```typescript
public readonly quotaInput: SpringCloudJavaDeploymentQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `springCloudAppIdInput`<sup>Optional</sup> <a name="springCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppIdInput"></a>

```typescript
public readonly springCloudAppIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudJavaDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `jvmOptions`<sup>Required</sup> <a name="jvmOptions" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptions"></a>

```typescript
public readonly jvmOptions: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudJavaDeploymentConfig <a name="SpringCloudJavaDeploymentConfig" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.Initializer"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

const springCloudJavaDeploymentConfig: springCloudJavaDeployment.SpringCloudJavaDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#name SpringCloudJavaDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#spring_cloud_app_id SpringCloudJavaDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#environment_variables SpringCloudJavaDeployment#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#id SpringCloudJavaDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#instance_count SpringCloudJavaDeployment#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.jvmOptions">jvmOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#jvm_options SpringCloudJavaDeployment#jvm_options}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#runtime_version SpringCloudJavaDeployment#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#name SpringCloudJavaDeployment#name}.

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#spring_cloud_app_id SpringCloudJavaDeployment#spring_cloud_app_id}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#environment_variables SpringCloudJavaDeployment#environment_variables}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#id SpringCloudJavaDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#instance_count SpringCloudJavaDeployment#instance_count}.

---

##### `jvmOptions`<sup>Optional</sup> <a name="jvmOptions" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.jvmOptions"></a>

```typescript
public readonly jvmOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#jvm_options SpringCloudJavaDeployment#jvm_options}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.quota"></a>

```typescript
public readonly quota: SpringCloudJavaDeploymentQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#quota SpringCloudJavaDeployment#quota}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#runtime_version SpringCloudJavaDeployment#runtime_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudJavaDeploymentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#timeouts SpringCloudJavaDeployment#timeouts}

---

### SpringCloudJavaDeploymentQuota <a name="SpringCloudJavaDeploymentQuota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.Initializer"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

const springCloudJavaDeploymentQuota: springCloudJavaDeployment.SpringCloudJavaDeploymentQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#cpu SpringCloudJavaDeployment#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#memory SpringCloudJavaDeployment#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#cpu SpringCloudJavaDeployment#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#memory SpringCloudJavaDeployment#memory}.

---

### SpringCloudJavaDeploymentTimeouts <a name="SpringCloudJavaDeploymentTimeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.Initializer"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

const springCloudJavaDeploymentTimeouts: springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#create SpringCloudJavaDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#delete SpringCloudJavaDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#read SpringCloudJavaDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#update SpringCloudJavaDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#create SpringCloudJavaDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#delete SpringCloudJavaDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#read SpringCloudJavaDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_java_deployment#update SpringCloudJavaDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudJavaDeploymentQuotaOutputReference <a name="SpringCloudJavaDeploymentQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

new springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudJavaDeploymentQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

---


### SpringCloudJavaDeploymentTimeoutsOutputReference <a name="SpringCloudJavaDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudJavaDeployment } from '@cdktf/provider-azurerm'

new springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudJavaDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a>

---



