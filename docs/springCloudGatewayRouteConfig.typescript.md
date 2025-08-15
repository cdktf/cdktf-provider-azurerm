# `springCloudGatewayRouteConfig` Submodule <a name="`springCloudGatewayRouteConfig` Submodule" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGatewayRouteConfig <a name="SpringCloudGatewayRouteConfig" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config azurerm_spring_cloud_gateway_route_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

new springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig(scope: Construct, id: string, config: SpringCloudGatewayRouteConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig">SpringCloudGatewayRouteConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig">SpringCloudGatewayRouteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putOpenApi">putOpenApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOpenApi">resetOpenApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetPredicates">resetPredicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSpringCloudAppId">resetSpringCloudAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSsoValidationEnabled">resetSsoValidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOpenApi` <a name="putOpenApi" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putOpenApi"></a>

```typescript
public putOpenApi(value: SpringCloudGatewayRouteConfigOpenApi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putOpenApi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putRoute"></a>

```typescript
public putRoute(value: IResolvable | SpringCloudGatewayRouteConfigRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudGatewayRouteConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>

---

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenApi` <a name="resetOpenApi" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetOpenApi"></a>

```typescript
public resetOpenApi(): void
```

##### `resetPredicates` <a name="resetPredicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetPredicates"></a>

```typescript
public resetPredicates(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetSpringCloudAppId` <a name="resetSpringCloudAppId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSpringCloudAppId"></a>

```typescript
public resetSpringCloudAppId(): void
```

##### `resetSsoValidationEnabled` <a name="resetSsoValidationEnabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetSsoValidationEnabled"></a>

```typescript
public resetSsoValidationEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudGatewayRouteConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudGatewayRouteConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudGatewayRouteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudGatewayRouteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudGatewayRouteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApi">openApi</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference">SpringCloudGatewayRouteConfigOpenApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList">SpringCloudGatewayRouteConfigRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference">SpringCloudGatewayRouteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filtersInput">filtersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApiInput">openApiInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicatesInput">predicatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppIdInput">springCloudAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayIdInput">springCloudGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabledInput">ssoValidationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filters">filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicates">predicates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayId">springCloudGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabled">ssoValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `openApi`<sup>Required</sup> <a name="openApi" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApi"></a>

```typescript
public readonly openApi: SpringCloudGatewayRouteConfigOpenApiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference">SpringCloudGatewayRouteConfigOpenApiOutputReference</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.route"></a>

```typescript
public readonly route: SpringCloudGatewayRouteConfigRouteList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList">SpringCloudGatewayRouteConfigRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudGatewayRouteConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference">SpringCloudGatewayRouteConfigTimeoutsOutputReference</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filtersInput"></a>

```typescript
public readonly filtersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openApiInput`<sup>Optional</sup> <a name="openApiInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.openApiInput"></a>

```typescript
public readonly openApiInput: SpringCloudGatewayRouteConfigOpenApi;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

---

##### `predicatesInput`<sup>Optional</sup> <a name="predicatesInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicatesInput"></a>

```typescript
public readonly predicatesInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | SpringCloudGatewayRouteConfigRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]

---

##### `springCloudAppIdInput`<sup>Optional</sup> <a name="springCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppIdInput"></a>

```typescript
public readonly springCloudAppIdInput: string;
```

- *Type:* string

---

##### `springCloudGatewayIdInput`<sup>Optional</sup> <a name="springCloudGatewayIdInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayIdInput"></a>

```typescript
public readonly springCloudGatewayIdInput: string;
```

- *Type:* string

---

##### `ssoValidationEnabledInput`<sup>Optional</sup> <a name="ssoValidationEnabledInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabledInput"></a>

```typescript
public readonly ssoValidationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudGatewayRouteConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.predicates"></a>

```typescript
public readonly predicates: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

---

##### `springCloudGatewayId`<sup>Required</sup> <a name="springCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.springCloudGatewayId"></a>

```typescript
public readonly springCloudGatewayId: string;
```

- *Type:* string

---

##### `ssoValidationEnabled`<sup>Required</sup> <a name="ssoValidationEnabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.ssoValidationEnabled"></a>

```typescript
public readonly ssoValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayRouteConfigConfig <a name="SpringCloudGatewayRouteConfigConfig" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

const springCloudGatewayRouteConfigConfig: springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudGatewayId">springCloudGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.filters">filters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.openApi">openApi</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | open_api block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.predicates">predicates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.route">route</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]</code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudAppId">springCloudAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.ssoValidationEnabled">ssoValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}.

---

##### `springCloudGatewayId`<sup>Required</sup> <a name="springCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudGatewayId"></a>

```typescript
public readonly springCloudGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApi`<sup>Optional</sup> <a name="openApi" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.openApi"></a>

```typescript
public readonly openApi: SpringCloudGatewayRouteConfigOpenApi;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

open_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#open_api SpringCloudGatewayRouteConfig#open_api}

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.predicates"></a>

```typescript
public readonly predicates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.route"></a>

```typescript
public readonly route: IResolvable | SpringCloudGatewayRouteConfigRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#route SpringCloudGatewayRouteConfig#route}

---

##### `springCloudAppId`<sup>Optional</sup> <a name="springCloudAppId" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.springCloudAppId"></a>

```typescript
public readonly springCloudAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}.

---

##### `ssoValidationEnabled`<sup>Optional</sup> <a name="ssoValidationEnabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.ssoValidationEnabled"></a>

```typescript
public readonly ssoValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudGatewayRouteConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#timeouts SpringCloudGatewayRouteConfig#timeouts}

---

### SpringCloudGatewayRouteConfigOpenApi <a name="SpringCloudGatewayRouteConfigOpenApi" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

const springCloudGatewayRouteConfigOpenApi: springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}.

---

### SpringCloudGatewayRouteConfigRoute <a name="SpringCloudGatewayRouteConfigRoute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

const springCloudGatewayRouteConfigRoute: springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#order SpringCloudGatewayRouteConfig#order}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.classificationTags">classificationTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#classification_tags SpringCloudGatewayRouteConfig#classification_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#description SpringCloudGatewayRouteConfig#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.filters">filters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.predicates">predicates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.ssoValidationEnabled">ssoValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#title SpringCloudGatewayRouteConfig#title}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.tokenRelay">tokenRelay</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#token_relay SpringCloudGatewayRouteConfig#token_relay}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}. |

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#order SpringCloudGatewayRouteConfig#order}.

---

##### `classificationTags`<sup>Optional</sup> <a name="classificationTags" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.classificationTags"></a>

```typescript
public readonly classificationTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#classification_tags SpringCloudGatewayRouteConfig#classification_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#description SpringCloudGatewayRouteConfig#description}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}.

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.predicates"></a>

```typescript
public readonly predicates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}.

---

##### `ssoValidationEnabled`<sup>Optional</sup> <a name="ssoValidationEnabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.ssoValidationEnabled"></a>

```typescript
public readonly ssoValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#title SpringCloudGatewayRouteConfig#title}.

---

##### `tokenRelay`<sup>Optional</sup> <a name="tokenRelay" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.tokenRelay"></a>

```typescript
public readonly tokenRelay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#token_relay SpringCloudGatewayRouteConfig#token_relay}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}.

---

### SpringCloudGatewayRouteConfigTimeouts <a name="SpringCloudGatewayRouteConfigTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

const springCloudGatewayRouteConfigTimeouts: springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#create SpringCloudGatewayRouteConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#delete SpringCloudGatewayRouteConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#read SpringCloudGatewayRouteConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#update SpringCloudGatewayRouteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#create SpringCloudGatewayRouteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#delete SpringCloudGatewayRouteConfig#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#read SpringCloudGatewayRouteConfig#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_gateway_route_config#update SpringCloudGatewayRouteConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayRouteConfigOpenApiOutputReference <a name="SpringCloudGatewayRouteConfigOpenApiOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

new springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayRouteConfigOpenApi;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigOpenApi">SpringCloudGatewayRouteConfigOpenApi</a>

---


### SpringCloudGatewayRouteConfigRouteList <a name="SpringCloudGatewayRouteConfigRouteList" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

new springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.get"></a>

```typescript
public get(index: number): SpringCloudGatewayRouteConfigRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudGatewayRouteConfigRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>[]

---


### SpringCloudGatewayRouteConfigRouteOutputReference <a name="SpringCloudGatewayRouteConfigRouteOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

new springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetClassificationTags">resetClassificationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetPredicates">resetPredicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetSsoValidationEnabled">resetSsoValidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTokenRelay">resetTokenRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassificationTags` <a name="resetClassificationTags" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetClassificationTags"></a>

```typescript
public resetClassificationTags(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetPredicates` <a name="resetPredicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetPredicates"></a>

```typescript
public resetPredicates(): void
```

##### `resetSsoValidationEnabled` <a name="resetSsoValidationEnabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetSsoValidationEnabled"></a>

```typescript
public resetSsoValidationEnabled(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetTokenRelay` <a name="resetTokenRelay" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetTokenRelay"></a>

```typescript
public resetTokenRelay(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTagsInput">classificationTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filtersInput">filtersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicatesInput">predicatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabledInput">ssoValidationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelayInput">tokenRelayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTags">classificationTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filters">filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicates">predicates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabled">ssoValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelay">tokenRelay</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationTagsInput`<sup>Optional</sup> <a name="classificationTagsInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTagsInput"></a>

```typescript
public readonly classificationTagsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: string[];
```

- *Type:* string[]

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `predicatesInput`<sup>Optional</sup> <a name="predicatesInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicatesInput"></a>

```typescript
public readonly predicatesInput: string[];
```

- *Type:* string[]

---

##### `ssoValidationEnabledInput`<sup>Optional</sup> <a name="ssoValidationEnabledInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabledInput"></a>

```typescript
public readonly ssoValidationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `tokenRelayInput`<sup>Optional</sup> <a name="tokenRelayInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelayInput"></a>

```typescript
public readonly tokenRelayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `classificationTags`<sup>Required</sup> <a name="classificationTags" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.classificationTags"></a>

```typescript
public readonly classificationTags: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.predicates"></a>

```typescript
public readonly predicates: string[];
```

- *Type:* string[]

---

##### `ssoValidationEnabled`<sup>Required</sup> <a name="ssoValidationEnabled" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.ssoValidationEnabled"></a>

```typescript
public readonly ssoValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `tokenRelay`<sup>Required</sup> <a name="tokenRelay" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.tokenRelay"></a>

```typescript
public readonly tokenRelay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudGatewayRouteConfigRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigRoute">SpringCloudGatewayRouteConfigRoute</a>

---


### SpringCloudGatewayRouteConfigTimeoutsOutputReference <a name="SpringCloudGatewayRouteConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudGatewayRouteConfig } from '@cdktf/provider-azurerm'

new springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudGatewayRouteConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGatewayRouteConfig.SpringCloudGatewayRouteConfigTimeouts">SpringCloudGatewayRouteConfigTimeouts</a>

---



